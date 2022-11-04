import { Checkbox } from "../Checkbox";
import styles from "./styles.module.css";

export const EntryDate = () => {
  return (
    <div className={styles.entryDate}>
      <span className={styles.title}>希望入場日</span>
      <Checkbox title={"11/19(土)"} />
      <Checkbox title={"11/20(日)"} />
    </div>
  );
};
