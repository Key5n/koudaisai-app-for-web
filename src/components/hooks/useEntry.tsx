import jsQR from "jsqr";
import { useCallback, useEffect, useRef, useState } from "react";
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

export const useEntry = () => {
  const [localstream, setLocalStream] = useState<MediaStream>();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

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
          setError("カメラをセットできません。");
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
      const endpoint = "/api/getUser";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONData,
      };
      setIsLoading(true);
      const response = await fetch(endpoint, options);
      const user: User = await response.json();
      setIsLoading(false);
      setUsers([...users, user]);
    }, 1_000 / videoFrameRate);

    intervalRef.current = intervalId;

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isCameraOpen, users]);

  const toggleCameraOpen = useCallback(() => {
    setIsCameraOpen(!isCameraOpen);
  }, [isCameraOpen]);

  const handleButtonClick = useCallback(async () => {
    if (users.length === 0) {
      setError("読み込んだQRコードの数が0なので何も発火しません。");
      return;
    }
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
  }, [users]);

  return {
    isCameraOpen,
    isLoading,
    setVideoRef,
    canvasRef,
    users,
    toggleCameraOpen,
    handleButtonClick,
    error,
  };
};
