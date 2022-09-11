import { FC } from "react";
import styles from "styles/reservation.module.css";
import KofunmanTalking from "components/molecules/kofunmanTalking";
import NewReservationButton from "components/atoms/newReservationButton";
import LoginButton from "components/atoms/loginButton";

const ReservationOrLogin: FC = () => {
  return (
    <div className={styles["reservation-or-login"]}>
      <KofunmanTalking />
      <NewReservationButton />
      <LoginButton />
    </div>
  );
};

export default ReservationOrLogin;
