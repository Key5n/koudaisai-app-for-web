import { FC } from "react";
import styles from "styles/components.module.css";

export const Text: FC<{ text: string }> = ({ text }) => {
  return <span className={styles.text}>{text}</span>;
};
