import { FC } from "react";
import styles from "styles/components.module.css";
import Button from "components/atoms/button";

const MoveButtons: FC = () => {
  return (
    <div className={styles.moveButtons}>
      <Button />
      <Button />
    </div>
  );
};

export default MoveButtons;
