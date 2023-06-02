import styles from "./styles.module.css";
import { useAppSelector } from "@/lib/reduxHooks";
import { Toast } from "./Toast/toast";

export const Notification = () => {
  const list = useAppSelector((state) => state.notification.notificationList);

  return (
    <div className={styles.notificationContainer}>
      {list?.map((notification, i) => (
        <Toast notification={notification} id={i} key={i} />
      ))}
    </div>
  );
};
