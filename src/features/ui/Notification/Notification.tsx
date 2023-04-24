import styles from "./styles.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Toast } from "./notificationSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { deleteElement } from "./notificationSlice";

type Props = {
  list: Toast[];
};

export const Notification = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.notification.toastList);

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length >= 1) {
        // deleteToast(list[0].id);
        dispatch(deleteElement(0));
      }
    }, 2_000);
    return () => {
      clearInterval(interval);
    };
  }, [list]);

  return (
    <div className={styles.notificationContainer}>
      {list?.map((toast, i) => (
        <div
          key={i}
          className={clsx(styles.notification, styles.toast)}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button onClick={() => dispatch(deleteElement(i))}>X</button>
          <div className={styles.notificationImage}>
            <img src={toast.icon.src} alt="status" width="30px" height="30px" />
          </div>
          <div>
            <p className={styles.notificationTitle}>{toast.title}</p>
            <p className={styles.notificationMessage}>{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
