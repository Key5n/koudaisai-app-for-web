import styles from "./styles.module.css";
import jsQR from "jsqr";
import { useCallback, useEffect, useRef, useState } from "react";
import { Video } from "components/atoms/Video";
import { Button } from "components/atoms/Button";
import clsx from "clsx";
import { ManageAdmission } from "../ManageAdmission";
import { User } from "types/types";

const videoWidth: number = 640;
const videoHeight: number = 480;
const videoFrameRate: number = 30;

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
  const [QRCodeData, setQRCodedata] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, SetUsers] = useState<User[]>([]);

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
      if (!decodedValue || QRCodeData.includes(decodedValue)) {
        return;
      }
      if (decodedValue.length !== 20 && decodedValue.length !== 28) {
        console.log("uidではありません");
        return;
      }
      setQRCodedata([...QRCodeData, decodedValue]);
    }, 1_000 / videoFrameRate);

    const getUsers = async () => {
      const data = {
        uids: QRCodeData,
        password: process.env.NEXT_PUBLIC_PASS,
      };
      const JSONData = JSON.stringify(data);
      const endpoint = "api/getUser";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONData,
      };
      const response = await fetch(endpoint, options);
      const { users }: { users: User[] } = await response.json();
      SetUsers(users);
    };

    intervalRef.current = intervalId;
    getUsers();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isCameraOpen, QRCodeData]);

  const toggleCameraOpen = () => {
    setIsCameraOpen(!isCameraOpen);
  };

  const handleButtonClick = async () => {
    setIsLoading(true);
    const JSONdata = JSON.stringify({
      uids: QRCodeData,
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
        <p>{QRCodeData.join("\n")}</p>
        <p>読み込んだ数: {QRCodeData.length}</p>
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
