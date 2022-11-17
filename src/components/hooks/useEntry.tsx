import jsQR from "jsqr";
import { title } from "process";
import { useCallback, useEffect, useRef, useState } from "react";
import { text } from "stream/consumers";
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
    facingMode: {
      exact: "environment",
    },
    // facingMode: "user",
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
  const [ModalConfig, setModalConfig] = useState({
    title: "",
    text: "",
    isOpen: false,
  });

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
          setError("エラー: カメラをセットできません。");
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

  const handleButtonClick = async () => {
    if (users.length === 0) {
      setError("読み込んだQRコードがありません。");
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
    console.log(result);
    const uidsOfAdmitted = admittedMembers.map((user) => {
      return user.uid;
    });
    const namesOfAdmitted = admittedMembers.map((user) => {
      return user.name;
    });
    setUsers((users) => {
      return users.filter((user) => {
        return uidsOfAdmitted.indexOf(user.uid) === -1;
      });
    });
    setModalConfig({
      title: "入場確認",
      text: `${namesOfAdmitted.join(",")}を入場させます。`,
      isOpen: true,
    });

    setIsLoading(false);
  };

  // 0 => able to enter
  // 1 => already entered
  // 2 => no reserved
  const statusAssigner = (user: User): 0 | 1 | 2 => {
    const firstDate: 16 = 16;
    const secondDate: number = firstDate + 1;

    const dayXVisited =
      new Date().getDate() === firstDate ? "dayOneVisited" : "dayTwoVisited";
    const dayXSelected =
      new Date().getDate() === firstDate ? "dayOneSelected" : "dayTwoSelected";

    const hasEnteredToday: boolean = user[dayXVisited];

    if (hasEnteredToday) {
      console.log("already entry error");
      return 1;
    }
    if (!dayXSelected) {
      console.log("no reserve error");
      return 2;
    }
    return 0;
  };
  type withStatusUser = User & { status: 0 | 1 | 2 };

  const withStatusUsers: withStatusUser[] = users.map((user) => {
    return { ...user, status: statusAssigner(user) };
  });

  return {
    isCameraOpen,
    isLoading,
    setVideoRef,
    canvasRef,
    users,
    toggleCameraOpen,
    handleButtonClick,
    error,
    ModalConfig,
    setModalConfig,
  };
};
