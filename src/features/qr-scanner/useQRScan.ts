import { useAppDispatch } from "@/lib/reduxHooks";
import { statusAssigner } from "@/lib/statusAssigner";
import { User, withStatusUser } from "@/types/types";
import jsQR from "jsqr";
import { useCallback, useRef, useState } from "react";
import {
  NotificationAction,
  addNotification,
} from "../ui/Notification/notificationSlice";
import { toggleIsLoading } from "../ui/Loading/isLoadingSlice";
import { closeModal } from "../ui/ModalWindow/modalWindowSlice";

export const videoWidth: number = 1280;
export const videoHeight: number = 960;
const videoFrameRate: number = 10;

export const useQRScan = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const QRCodeData = useRef<string[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef<number>();
  const dispatch = useAppDispatch();

  const constraints: MediaStreamConstraints = {
    audio: false,
    video: {
      width: { ideal: videoWidth },
      height: { ideal: videoHeight },
      frameRate: { ideal: videoFrameRate },
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
    if (localStream) {
      setIsCameraOpen(!isCameraOpen);
      (videoRef.current?.srcObject as MediaStream)
        .getTracks()
        .forEach((track) => {
          track.stop();
        });
      setLocalStream(null);
      clearInterval(intervalRef.current);
    } else {
      setIsCameraOpen(!isCameraOpen);
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
  };

  async function openCamera() {
    const stream = await navigator.mediaDevices
      .getUserMedia(constraints)
      .catch((error) => {
        const NotificationAction: NotificationAction = {
          title: "カメラが取得できませんでした。",
          description: "リロードして再試行してください。",
          type: "error",
        };
        dispatch(addNotification(NotificationAction));
      });
    if (stream instanceof MediaStream) {
      setLocalStream(stream);
    }
    intervalRef.current = intervalId();
  }

  function intervalId(): number {
    return window.setInterval(async () => {
      const decodedValue = decodeQRCode();

      if (!decodedValue || QRCodeData.current.includes(decodedValue)) {
        return;
      }
      QRCodeData.current = [...QRCodeData.current, decodedValue];

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
      dispatch(toggleIsLoading());
      const response = await fetch(endpoint, options);
      const responseJSON = await response.json();
      if (response.status !== 200) {
        dispatch(
          addNotification({
            type: "error",
            title: "エラー",
            description: responseJSON.message,
          })
        );
      } else {
        const user: User = responseJSON;

        setUsers((users) => [...users, user]);
        dispatch(
          addNotification({
            type: "success",
            title: "Success",
            description: `${user.name}をセットしました`,
          })
        );
      }
      dispatch(toggleIsLoading());
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
      dispatch(
        addNotification({
          title: "エラー",
          description: "読み込んだユーザーがいません",
          type: "error",
        })
      );
      dispatch(closeModal());
      return;
    }
    dispatch(closeModal());
    const withStatusUsers: withStatusUser[] = users.map((user) => {
      return { ...user, status: statusAssigner(user) };
    });

    const admittedMembers = withStatusUsers.filter((user) => {
      return user.status === 0;
    });

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
    dispatch(toggleIsLoading());
    const response = await fetch(endpoint, options);
    const result = await response.json();
    dispatch(
      addNotification({
        title: "Success",
        description: "入場処理に成功しました。",
        type: "success",
      })
    );
    const uidsOfAdmitted = admittedMembers.map((user) => {
      return user.uid;
    });
    setUsers((users) => {
      return users.filter((user) => {
        return uidsOfAdmitted.indexOf(user.uid) === -1;
      });
    });
    dispatch(toggleIsLoading());
  }
};
