import styles from "./styles.module.css";
import clsx from "clsx";
import { KofunmanTalking } from "../ui/KofunmanTalking";
import Link from "next/link";
import checkIcon from "../../assets/check.svg";
import errorIcon from "../../assets/error.svg";
import infoIcon from "../../assets/info.svg";
import warningIcon from "../../assets/warning.svg";
import { Notification } from "../ui/Notification/Notification";
import { useState } from "react";
import { Button } from "../ui/Button";

type Toast = {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
  icon: svgObject;
};

type svgObject = {
  src: string;
  height: number;
  width: number;
};

export const Home = () => {
  const [list, setList] = useState<Toast[]>([]);
  const testList = [
    {
      id: 1,
      title: "Success",
      description: "This is a success toast component",
      backgroundColor: "#5cb85c",
      icon: checkIcon,
    },
    {
      id: 2,
      title: "Danger",
      description: "This is an error toast component",
      backgroundColor: "#d9534f",
      icon: errorIcon,
    },
    {
      id: 3,
      title: "Info",
      description: "This is an info toast component",
      backgroundColor: "#5bc0de",
      icon: infoIcon,
    },
    {
      id: 4,
      title: "Warning",
      description: "This is a warning toast component",
      backgroundColor: "#f0ad4e",
      icon: warningIcon,
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
      <Button onClick={() => setList([...list, testList[0]])}>ボタン</Button>
      <Button onClick={() => setList([...list, testList[1]])}>ボタン</Button>
      <Button onClick={() => setList([...list, testList[2]])}>ボタン</Button>
      <Button onClick={() => setList([...list, testList[3]])}>ボタン</Button>

      <Notification list={list} func={(a: any) => setList(a)} />
    </>
  );
};
