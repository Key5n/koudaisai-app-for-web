import { FC } from "react";
import styles from "styles/reservation.module.css";

const NewReservationButton: FC = () => {
  return (
    <button
      className={`${styles["button__reservation"]} ${styles["drop-shadow"]} ${styles["Yusei-Magic"]}`}
    >
      工大祭新規予約
    </button>
  );
};

export default NewReservationButton;
