import styles from "styles/components.module.css";

const Subtitle: React.FC<{ text: string }> = ({ text }) => {
  return <p className={styles.subtitle}>{text}</p>;
};

export default Subtitle;
