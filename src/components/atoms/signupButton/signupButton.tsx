import { FC } from "react";
import styles from "styles/components.module.css";
import Link from "next/link";

export const signupButton: FC = () => {
  return (
    <Link href="/signup">
      <a className={styles.signupButton}>新規予約</a>
    </Link>
  );
};

