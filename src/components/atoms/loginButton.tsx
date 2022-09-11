import { FC } from "react";
import styles from "styles/reservation.module.css";

const LoginButton: FC = () => {
  return (
    <button
      className={`${styles["button__login"]} ${styles["drop-shadow"]} ${styles["RocknRoll-One"]}`}
    >
      すでに工大祭に
      <br />
      予約された方はこちら
    </button>
  );
};

export default LoginButton;
