import clsx from "clsx";
import styles from "./styles.module.css"

type Props = {
  message: string;
}

export const FadeNotification = ({ message }: Props) => {
  return message ? <p className={clsx(styles.status)}>{message}</p> : <></>
}