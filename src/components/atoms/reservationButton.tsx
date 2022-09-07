import { FC } from "react";
import styles from "styles/reservation.module.css";

const ReservationButton: FC = () => {
  return (
    <button className={styles["button--reservation"]}>工大祭新規予約</button>
  );
};

export default ReservationButton;
