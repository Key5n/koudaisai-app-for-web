import { FC } from "react";
import styles from "styles/reservation.module.css";

const PTag: FC = () => {
  return (
    <p className={`{${styles["p"]} ${styles["Yusei-Magic"]}`}>
      テスト<span className={styles["red"]}>(必須)</span>
    </p>
  );
};

export default PTag;
