import styles from "styles/components.module.css";

export const Subtitle: React.FC<{ text: string }> = ({ text }) => {
  return <p className={styles.subtitle}>{text}</p>;
};

