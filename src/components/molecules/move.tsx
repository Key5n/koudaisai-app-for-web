import { FC } from "react";
import styles from "styles/reservation.module.css";
import MoveButton from "components/atoms/moveButton";

const Move = () => {
  return (
    <div className={styles["button--space-between"]}>
      <MoveButton />
      <MoveButton />
    </div>
  );
};

export default Move;
