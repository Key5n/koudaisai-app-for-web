import { FC } from "react";
import styles from "styles/components.module.css";
import Text from "components/atoms/text";
import ReservationInput from "components/atoms/input";

const InputItem: FC = () => {
  return (
    <div className={styles.inputItem}>
      <Text text="テキスト" />
      <ReservationInput />
    </div>
  );
};

export default InputItem;
