import { FC } from "react";
import styles from "styles/components.module.css";
import PTag from "components/atoms/ptag";
import ReservationInput from "components/atoms/input";

const InputItem: FC = () => {
  return (
    <div className={styles.inputItem}>
      <PTag />
      <ReservationInput />
    </div>
  );
};

export default InputItem;
