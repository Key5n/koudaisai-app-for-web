import { FC } from "react";
import styles from "styles/reservation.module.css";

const LoginButton: FC = () => {
  return (
    <button className={styles["button--login"]}>
      すでに工大祭に
      <br />
      予約された方はこちら
    </button>
  );
};

export default LoginButton;
