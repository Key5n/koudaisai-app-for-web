import { FC } from "react";
import styles from "styles/reservation.module.css";
import InputItem from "components/molecules/inputItem";
import Move from "components/molecules/move";

const AuthenticationItem: FC = () => {
  return (
    <div className={styles["auth-block"]}>
      <InputItem />
      <InputItem />
      <InputItem />
      <Move />
    </div>
  );
};

export default AuthenticationItem;
