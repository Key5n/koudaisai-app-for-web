import styles from "./styles.module.css";
export const Hamburger = () => {
  return (
    <div className={styles.module}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
};
