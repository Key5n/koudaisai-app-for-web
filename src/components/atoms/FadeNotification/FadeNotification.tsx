import clsx from "clsx";
import styles from "./styles.module.css"

type Props = {
  status: { error: boolean, message: string };
}

export const FadeNotification = ({ status: { message } }: Props) => {
  return message ? <p className={clsx(styles.status)}>{message}</p> : <></>
}