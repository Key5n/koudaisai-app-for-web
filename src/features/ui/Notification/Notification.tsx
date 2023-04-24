import styles from "./styles.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

type Props = {
  list: Toast[];
  func: (a: any) => void;
};

type Toast = {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
  icon: svgObject;
};

type svgObject = {
  src: string;
  height: number;
  width: number;
};

export const Notification = ({ list, func }: Props) => {
  function deleteToast(id: number) {
    const index = list.findIndex((e) => {
      return e.id === id;
    });
    list.splice(index, 1);
    func([...list]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length >= 1) {
        deleteToast(list[0].id);
      }
    }, 2_000);
    return () => {
      clearInterval(interval);
    };
  }, [list]);

  // useEffect(() => {
  //   setIsShowing(true);
  //   setTimeout(() => {
  //     setIsShowing(false);
  //   }, 3_000);
  // }, [message]);
  return (
    <div className={styles.notificationContainer}>
      {list?.map((toast, i) => (
        <div
          key={i}
          className={clsx(styles.notification, styles.toast)}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
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
