import { FC } from "react";
import styles from "styles/reservation.module.css";
import ReservationOrLogin from "components/organisms/reservationOrLogin";
import AuthenticationItem from "components/organisms/authentication";

const Tickets: FC = () => {
  return (
    <main>
      <ReservationOrLogin />
      <AuthenticationItem />
    </main>
  );
};

export default Tickets;
