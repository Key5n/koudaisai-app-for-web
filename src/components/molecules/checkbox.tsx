import { FC } from "react";
import styles from "styles/components.module.css";

const Checkbox: FC = () => {
  return (
    <label>
      <input type="checkbox" />
      <span className={styles.checkbox}>11/19(土)</span>
    </label>
  );
};

export default Checkbox;
