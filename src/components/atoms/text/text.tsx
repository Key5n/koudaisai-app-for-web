import { FC } from "react";
import styles from "./styles.module.css";

export const Text: FC<{ text: string }> = ({ text }) => {
  return <span className={styles.text}>{text}</span>;
};
