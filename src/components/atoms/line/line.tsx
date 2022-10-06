import { FC } from "react";
import styles from "styles/components.module.css";

const Line: FC<{ line?: string }> = ({
  line = "セリフ",
}: {
  line?: string;
}) => {
  return <h2 className={styles.line}>{line}</h2>;
};

export default Line;
