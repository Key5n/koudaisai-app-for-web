import styles from "./styles.module.css";
import clsx from "clsx";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { deleteElement } from "./notificationSlice";

export const Notification = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.notification.notificationList);

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length >= 1) {
        dispatch(deleteElement(0));
      }
    }, 4_000);
    return () => {
      clearInterval(interval);
    };
  }, [list]);

  return (
    <div className={styles.notificationContainer}>
      {list?.map((notification, i) => (
        <div
          key={i}
          className={clsx(styles.notification, styles.notification)}
          style={{ backgroundColor: notification.color }}
        >
          <button onClick={() => dispatch(deleteElement(i))}>X</button>
          <div className={styles.notificationImage}>
            <img
              src={notification.path}
              alt="status"
              width="30px"
              height="30px"
            />
          </div>
          <div>
            <p className={styles.notificationTitle}>{notification.title}</p>
            <p className={styles.notificationMessage}>
              {notification.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
