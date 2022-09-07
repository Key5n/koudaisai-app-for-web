import { FC } from "react";
import styles from "styles/reservation.module.css";
import KofunmanTalking from "components/molecules/kofunmanTalking";
import ReservationButton from "components/atoms/reservationButton";
import LoginButton from "components/atoms/loginButton";

const ReservationOrLogin: FC = () => {
  return (
    <div className={styles["reservation-or-login"]}>
      <KofunmanTalking />
      <ReservationButton />
      <LoginButton />
    </div>
  );
};

export default ReservationOrLogin;
