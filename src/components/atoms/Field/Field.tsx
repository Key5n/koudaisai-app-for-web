import styles from "./styles.module.css";

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
