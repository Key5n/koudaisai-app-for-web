import { FC } from "react";
import styles from "styles/components.module.css";
import Link from "next/link";

const signupButton: FC = () => {
  return (
    <Link href="/signup">
      <a className={styles.signupButton}>工大祭新規予約</a>
    </Link>
  );
};

export default signupButton;
