import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./styles.module.css"

type Props = {
  message: string;
}

export const FadeNotification = ({ message }: Props) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 3_000)
  }, [message])
  return message ? <p className={clsx(isAnimating && styles.animate, styles.status)}>{message}</p> : <></>;
}