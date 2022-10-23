import { FC } from "react";
import styles from "./styles.module.css";
import { Text } from "components/atoms/text";
import { Input } from "components/atoms/input";

type Props = { text: string };

export const InputItem = ({ text }: Props) => {
  return (
    <div className={styles.module}>
      <span className={styles.text}>{text}</span>
      <Input className={styles.input} />
    </div>
  );
};
