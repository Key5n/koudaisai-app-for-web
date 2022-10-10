import styles from "./styles.module.css";
import { TextboxWithButtons } from "../TextboxWithButtons";
import { Text } from "components/atoms/text";

export const TextboxWithTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className={styles.module}>
      <Text text={text} />
      <TextboxWithButtons value={0} />
    </div>
  );
};
