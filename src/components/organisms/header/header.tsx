import styles from "./styles.module.css";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return <header className={styles.module}>{title}</header>;
};
