import styles from "./styles.module.css";
import clsx from "clsx";
import { KofunmanTalking } from "../ui/KofunmanTalking";
import Link from "next/link";
import { Button } from "../ui/Button";
import { useAppDispatch } from "@/lib/reduxHooks";
import {
  NotificationAction,
  addNotification,
} from "@/features/ui/Notification/notificationSlice";
import { Notification } from "../ui/Notification";
export const Home = () => {
  const dispatch = useAppDispatch();
  const testList: NotificationAction[] = [
    {
      title: "Success",
      description: "This is a success toast component",
      type: "success",
    },
    {
      title: "Danger",
      description: "This is an error toast component",
      type: "error",
    },
    {
      title: "Info",
      description: "This is an info toast component",
      type: "info",
    },
    {
      title: "Warning",
      description: "This is a warning toast component",
      type: "warning",
    },
  ];
  return (
    <>
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
      <Button
        onClick={() => {
          dispatch(addNotification(testList[0]));
        }}
      >
        ボタン
      </Button>
      <Button
        onClick={() => {
          dispatch(addNotification(testList[1]));
        }}
      >
        ボタン
      </Button>
      <Button
        onClick={() => {
          dispatch(addNotification(testList[2]));
        }}
      >
        ボタン
      </Button>
      <Button
        onClick={() => {
          dispatch(addNotification(testList[3]));
        }}
      >
        ボタン
      </Button>
      <Notification />
    </>
  );
};
