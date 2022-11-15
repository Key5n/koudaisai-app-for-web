import styles from "./styles.module.css";
import jsQR from "jsqr";
import { useCallback, useEffect, useRef, useState } from "react";
import { Video } from "components/atoms/Video";
import { Button } from "components/atoms/Button";

const videoWidth: number = 640;
const videoHeight: number = 480;
const videoFrameRate: number = 5;

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef<number>();

  const setVideoRef = useCallback(
    (element: HTMLVideoElement) => {
      if (!element || !localstream) {
        return;
      }
      element.srcObject = localstream;
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
    if (!localstream || !videoRef.current || !isCameraOpen) {
      return;
    }
    videoRef.current.srcObject = localstream;
  }, [isCameraOpen, localstream]);

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

    const intervalId = window.setInterval(() => {
      const decodedValue = decodeQRCode();
      if (!decodedValue || QRCodeData.includes(decodedValue)) {
        return;
      }
      setQRCodedata([...QRCodeData, decodedValue]);
    }, 1_000 / videoFrameRate);
    if (typeof window !== "undefined") {
      intervalRef.current = intervalId;
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isCameraOpen, QRCodeData]);

  const toggleCameraOpen = () => {
    setIsCameraOpen(!isCameraOpen);
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
    </div>
  );
};
