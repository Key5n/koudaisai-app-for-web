import Link from "next/link";
import { FC } from "react";
import styles from "styles/components.module.css";

const button: FC = () => {
  return (
    <Link href="">
      <a className={styles.button}>テスト</a>
    </Link>
  );
};

export default button;
