import { useAppDispatch } from "@/lib/reduxHooks";
import { statusAssigner } from "@/lib/statusAssigner";
import { User, withStatusUser } from "@/types/types";
import jsQR from "jsqr";
import { useCallback, useRef, useState } from "react";
import {
  NotificationAction,
  addNotification,
} from "../ui/Notification/notificationSlice";

export const videoWidth: number = 640;
export const videoHeight: number = 480;
const videoFrameRate: number = 10;

export const useQRScan = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [QRCodeData, setQRCodeData] = useState<string[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef<number>();
  const dispatch = useAppDispatch();

  const constraints: MediaStreamConstraints = {
    audio: false,
    video: {
      width: { min: videoWidth },
      height: { min: videoHeight },
      frameRate: {
        max: videoFrameRate,
      },
      facingMode: {
        exact: "environment",
      },
    },
  };

  const setVideoRef = useCallback(
    (element: HTMLVideoElement) => {
      if (!element || !localStream) {
        return;
      }
      videoRef.current = element;
      videoRef.current.srcObject = localStream;
    },
    [localStream]
  );

  const toggleCameraOpen = useCallback(() => {
    setIsCameraOpen(!isCameraOpen);
    if (localStream) {
      (videoRef.current?.srcObject as MediaStream)
        .getTracks()
        .forEach((track) => {
          track.stop();
        });
      setLocalStream(null);
      clearInterval(intervalRef.current);
    } else {
      openCamera();
    }
  }, [isCameraOpen, localStream]);

  return {
    isCameraOpen,
    setVideoRef,
    canvasRef,
    users,
    toggleCameraOpen,
    makeAllEnter,
    setQRCodeData,
    setUsers,
  };

  async function openCamera() {
    const stream = await navigator.mediaDevices
      .getUserMedia(constraints)
      .catch((error) => {
        const NotificationAction: NotificationAction = {
          title: error,
          description: "カメラを取得できません",
          type: "error",
        };
        dispatch(addNotification(NotificationAction));
        throw error;
      });
    setLocalStream(stream);
    intervalRef.current = intervalId();
  }

  function intervalId(): number {
    return window.setInterval(async () => {
      const decodedValue = decodeQRCode();
      if (!decodedValue || QRCodeData.includes(decodedValue)) {
        return;
      }
      setQRCodeData([...QRCodeData, decodedValue]);

      const data = {
        content: decodedValue,
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
      const responseJSON = await response.json();
      if (response.status !== 200) {
        setStatus(responseJSON);
      } else {
        const user: User = responseJSON;
        setUsers([...users, user]);
        setStatus({
          error: false,
          message: `ユーザー${user.name}をセットしました。`,
        });
      }
      setIsLoading(false);
    }, 1_000 / videoFrameRate);
  }
  function decodeQRCode() {
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
  }

  async function makeAllEnter() {
    if (users.length === 0) {
      setStatus({ error: true, message: "読み込んだQRコードがありません。" });
      return;
    }

    const admittedMembers = withStatusUsers.filter((user) => {
      return user.status === 0;
    });

    setIsLoading(true);
    const JSONdata = JSON.stringify({
      users: admittedMembers,
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
    setStatus(result);
    const uidsOfAdmitted = admittedMembers.map((user) => {
      return user.uid;
    });
    setUsers((users) => {
      return users.filter((user) => {
        return uidsOfAdmitted.indexOf(user.uid) === -1;
      });
    });
    setModalConfig({
      ...ModalConfig,
      isModalOpen: false,
    });

    setIsLoading(false);
  }
  const withStatusUsers: withStatusUser[] = users.map((user) => {
    return { ...user, status: statusAssigner(user) };
  });
};
