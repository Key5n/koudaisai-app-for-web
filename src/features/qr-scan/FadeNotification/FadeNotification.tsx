import styles from "./styles.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

type Props = {
  message: string;
};

export const FadeNotification = ({ message }: Props) => {
  const [isShowing, setIsShowing] = useState<boolean>(true);
  useEffect(() => {
    setIsShowing(true);
    setTimeout(() => {
      setIsShowing(false);
    }, 3_000);
  }, [message]);
  return (
    <>
      {message && (
        <p
          className={clsx(
            isShowing ? styles.showing : styles.hiding,
            styles.status
          )}
        >
          {message}
        </p>
      )}
    </>
  );
};
