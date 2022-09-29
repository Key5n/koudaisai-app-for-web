import { FC } from "react";
import Checkbox from "./checkbox";
import styles from "/src/styles/components.module.css";
import Text from "components/atoms/text";

const EntryDate: FC = () => {
  return (
    <div className={styles.entryDate}>
      <Text text="希望入場日" />
      <Checkbox />
      <Checkbox />
    </div>
  );
};

export default EntryDate;
