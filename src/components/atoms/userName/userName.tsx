import styles from "styles/components.module.css";

const UserName: React.FC<{ name: string }> = ({ name }) => {
  return <span className={styles.userName}>{name}様</span>;
};

export default UserName;
