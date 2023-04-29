import styles from "./styles.module.css";
import { KofunmanTalking } from "../ui/KofunmanTalking";
import Link from "next/link";
import { useAppDispatch } from "@/lib/reduxHooks";
import { addNotification } from "../ui/Notification/notificationSlice";
import { useEffect } from "react";
export const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      addNotification({
        type: "info",
        title: "お知らせ",
        description: "現在予約不可です。",
      })
    );
  }, []);
  return (
    <main className={styles.module}>
      <KofunmanTalking
        line={{ children: "僕は古墳マン。\n工大祭の案内をするよ！" }}
        mode={0}
      />
      <Link href="">
        <a className={styles.signupButton}>新規予約</a>
      </Link>
      <div className={styles.login}>
        <p>すでに工大祭に予約された場合</p>
        <Link href="">
          <a className={styles.loginButton}>ログイン</a>
        </Link>
      </div>
    </main>
  );
};
