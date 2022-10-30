import styles from "./styles.module.css";

export const Checkbox = ({ title }: { title: string }) => {
  return (
    <label>
      <input type="checkbox" />
      <span className={styles.checkbox}>{title}</span>
    </label>
  );
};
