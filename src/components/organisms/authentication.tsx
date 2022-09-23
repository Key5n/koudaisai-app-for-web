import { FC } from "react";
import styles from "styles/components.module.css";
import InputItem from "components/molecules/inputItem";

const Authentication: FC = () => {
  return (
    <div className={styles.authentication}>
      <InputItem />
      <InputItem />
      <InputItem />
    </div>
  );
};

export default Authentication;
