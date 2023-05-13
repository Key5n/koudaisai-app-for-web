import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  title: string;
  value: number;
};

export const Field = ({ title, value }: Props) => {
  return (
    <div className={styles.module}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};
