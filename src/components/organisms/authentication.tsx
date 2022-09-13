import { FC } from "react";
import styles from "styles/components.module.css";
import InputItem from "components/molecules/inputItem";
import MoveButtons from "components/molecules/moveButtons";

const Authentication: FC = () => {
  return (
    <div className={styles.authentication}>
      <InputItem />
      <InputItem />
      <InputItem />
      <MoveButtons />
    </div>
  );
};

export default Authentication;
