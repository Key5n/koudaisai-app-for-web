import styles from "./styles.module.css";
import jsQR from "jsqr";
import { useEffect, useRef, useState } from "react";
import { Video } from "components/atoms/Video";
import { Button } from "components/atoms/Button";

const videoWidth: number = 500;
const videoHeight: number = 500;
const videoFrameRate: number = 5;

const constraints: MediaStreamConstraints = {
  audio: false,
  video: {
    width: videoWidth,
    height: videoHeight,
    frameRate: {
      max: videoHeight,
    },
    facingMode: {
      exact: "environment",
    },
  },
};

export const QRScanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [localstream, setLocalStream] = useState<MediaStream>();
  const intervalRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [QRCodeData, setQRCodedata] = useState<string[]>([]);

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
    if (!localstream || !videoRef.current) {
      return;
    }
    videoRef.current.srcObject = localstream;
  }, [localstream]);

  useEffect(() => {
    if (!isCameraOpen) {
      return;
    }

    const decodeQRCode = () => {
      const context = canvasRef.current?.getContext("2d");
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
    intervalRef.current = intervalId;
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isCameraOpen, QRCodeData]);

  const toggleCameraOpen = () => {
    setIsCameraOpen(!isCameraOpen);
  };

  return (
    <div className={styles.module}>
      {isCameraOpen && (
        <Video
          autoPlay
          playsInline={true}
          ref={videoRef}
          className={styles.video}
        >
          <canvas width={videoWidth} height={videoHeight} ref={canvasRef} />
        </Video>
      )}
      <div className={styles.content}>
        <p>{QRCodeData.join("\n")}</p>
        <p>読み込んだ数: {QRCodeData.length}</p>
        <Button onClick={toggleCameraOpen}>
          {isCameraOpen ? "ストップ" : "スタート"}
        </Button>
      </div>
    </div>
  );
};
