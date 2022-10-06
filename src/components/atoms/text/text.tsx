import { FC } from "react";
import styles from "styles/components.module.css";

export const Text: FC<{ text: string }> = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

