import styles from "./styles.module.css";
import jsQR from "jsqr";
import { useCallback, useEffect, useRef, useState } from "react";
import { Video } from "components/atoms/Video";
import { Button } from "components/atoms/Button";
import { ManageAdmission } from "../ManageAdmission";
import { User } from "types/types";

const videoWidth: number = 640;
const videoHeight: number = 480;
const videoFrameRate: number = 10;

const constraints: MediaStreamConstraints = {
  audio: false,
  video: {
    width: { min: videoWidth },
    height: { min: videoHeight },
    frameRate: {
      max: videoFrameRate,
    },
    // facingMode: {
    //   exact: "environment",
    // },
    facingMode: "user",
  },
};

export const QRScanner = () => {
  const [localstream, setLocalStream] = useState<MediaStream>();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  const setVideoRef = useCallback(
    (element: HTMLVideoElement) => {
      if (!element || !localstream) {
        return;
      }
      videoRef.current = element;
      videoRef.current.srcObject = localstream;
    },
    [localstream]
  );

  useEffect(() => {
    const openCamera = async () => {
      const stream = await navigator.mediaDevices
        .getUserMedia(constraints)
        .catch((error) => {
          console.log("メディア取得中のエラー", error);
          throw error;
        });
      setLocalStream(stream);
    };
    openCamera();
  }, []);

  useEffect(() => {
    if (!isCameraOpen) {
      return;
    }

    const decodeQRCode = () => {
      const context = canvasRef.current?.getContext("2d", {
        willReadFrequently: true,
      });
      const video = videoRef.current;
      if (!context || !video) {
        return;
      }
      context.drawImage(video, 0, 0, videoWidth, videoHeight);
      const imageData = context.getImageData(0, 0, videoWidth, videoHeight);
      const code = jsQR(imageData.data, videoWidth, videoHeight);

      return code?.data;
    };

    const intervalId = window.setInterval(async () => {
      const decodedValue = decodeQRCode();
      if (
        !decodedValue ||
        users.find((user) => {
          return user.uid === decodedValue;
        })
      ) {
        return;
      }

      const data = {
        uid: decodedValue,
        password: process.env.NEXT_PUBLIC_PASS,
      };
      const JSONData = JSON.stringify(data);
      const endpoint = "api/getUser";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONData,
      };
      setIsLoading(true);
      const response = await fetch(endpoint, options);
      const { user }: { user: User } = await response.json();
      setIsLoading(false);
      setUsers([...users, user]);
    }, 1_000 / videoFrameRate);

    intervalRef.current = intervalId;

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isCameraOpen, users]);

  const toggleCameraOpen = () => {
    setIsCameraOpen(!isCameraOpen);
  };

  const handleButtonClick = async () => {
    setIsLoading(true);
    const JSONdata = JSON.stringify({
      uses: users,
      password: process.env.NEXT_PUBLIC_PASS,
    });
    const endpoint = "/api/entry";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result);
    setIsLoading(false);
  };

  if (isLoading) {
    <p>ローディング中</p>;
  }

  return (
    <div>
      {isCameraOpen && (
        <Video
          autoPlay
          playsInline={true}
          ref={setVideoRef}
          className={styles.video}
        >
          <canvas width={videoWidth} height={videoHeight} ref={canvasRef} />
        </Video>
      )}
      <div>
        <p>{users.join("\n")}</p>
        <p>読み込んだ数: {users.length}</p>
      </div>
      <Button onClick={toggleCameraOpen}>
        {isCameraOpen ? "ストップ" : "スタート"}
      </Button>
      <Button onClick={handleButtonClick} disabled={isLoading}>
        まとめて入場
      </Button>
      <ManageAdmission users={users} />
    </div>
  );
};
