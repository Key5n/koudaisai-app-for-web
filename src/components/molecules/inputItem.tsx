import { FC } from "react";
import styles from "styles/reservation.module.css";
import PTag from "components/atoms/ptag";
import ReservationInput from "components/atoms/reservationInput";

const InputItem: FC = () => {
  return (
    <div className={styles["reservation-item"]}>
      <PTag />
      <ReservationInput />
    </div>
  );
};

export default InputItem;
