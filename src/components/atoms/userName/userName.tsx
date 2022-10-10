import styles from "styles/components.module.css";

export const UserName: React.FC<{ name: string }> = ({ name }) => {
  return <span className={styles.userName}>{name}様</span>;
};

