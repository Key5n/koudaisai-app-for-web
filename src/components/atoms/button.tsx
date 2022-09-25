import Link from "next/link";
import { FC } from "react";
import styles from "styles/components.module.css";

const Button: FC<{ prop: string }> = ({ prop }) => {
  return (
    <Link href={`/${prop}`}>
      <a className={styles.button}>テスト</a>
    </Link>
  );
};

export default Button;
