import { FC } from "react";
import Link from "next/link";
import styles from "styles/components.module.css";

const LoginButton: FC = () => {
  return (
    <Link href="/signup">
      <a className={styles.loginButton}>ログイン</a>
    </Link>
  );
};

export default LoginButton;
