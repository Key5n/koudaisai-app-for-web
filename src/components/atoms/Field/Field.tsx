import styles from "./styles.module.css";

export const Field: React.FC<{ title: string; value: string | number }> = ({
  title,
  value,
}) => {
  return (
    <div className={styles.module}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};
