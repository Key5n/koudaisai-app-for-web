import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { DetailedNotification, deleteElement } from "../notificationSlice";
import styles from "./styles.module.css";
import clsx from "clsx";
import { useEffect } from "react";
type Props = {
  notification: DetailedNotification;
  id: number;
};
export const Toast = ({ notification, id }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(deleteElement(id));
    }, 4_000);
    return () => {
      clearTimeout(timer);
    };
  }, [id, dispatch]);
  return (
    <div
      key={id}
      className={clsx(styles.notification, styles.notification)}
      style={{ backgroundColor: notification.color }}
    >
      <button onClick={() => dispatch(deleteElement(id))}>X</button>
      <div className={styles.notificationImage}>
        <img src={notification.path} alt="status" width="30px" height="30px" />
      </div>
      <div>
        <p className={styles.notificationTitle}>{notification.title}</p>
        <p className={styles.notificationMessage}>{notification.description}</p>
      </div>
    </div>
  );
};
