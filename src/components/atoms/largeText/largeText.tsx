import styles from "./styles.module.css";

export const LargeText: React.FC<{ text: string | number }> = ({ text }) => {
  return <span className={styles.module}>{text}</span>;
};
