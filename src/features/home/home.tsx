import styles from "./styles.module.css";
import clsx from "clsx";
import { KofunmanTalking } from "../ui/KofunmanTalking";
import Link from "next/link";
export const Home = () => {
  return (
    <main className={styles.module}>
      <KofunmanTalking
        line={{ children: "僕は古墳マン。\n工大祭の案内をするよ！" }}
        mode={0}
      />
      <Link href="signup">
        <a className={styles.signupButton}>新規予約</a>
      </Link>
      <div className={styles.login}>
        <p>すでに工大祭に予約された場合</p>
        <Link href="login">
          <a className={styles.loginButton}>ログイン</a>
        </Link>
      </div>
    </main>
  );
};
