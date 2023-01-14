import styles from "./styles.module.css";
import { NextPageWithLayout } from "@/lib/next/types";
import Link from "next/link";

export const Config: NextPageWithLayout = () => {
  return (
    <main className={styles.module}>
      <ul>
        <li>
          <Link href="/privacy">
            <a className={styles.link}>プライバシーポリシー</a>
          </Link>
        </li>
        <li>
          <Link href="/mystery">
            <a className={styles.link}>アプリ用謎解き画面へ</a>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <a className={styles.link}>よくある質問へ</a>
          </Link>
        </li>
        <li>
          <Link href="/triathlon">
            <a className={styles.link}>アプリ用謎解き画面へ</a>
          </Link>
        </li>
        <h1>運営用(認証の必要あり)</h1>
        <li>
          <Link href="/admin/mystery">
            <a className={styles.link}>管理者用謎解き画面へ</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/triathlong">
            <a className={styles.link}>管理者用トライアスロン画面へ</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/qr-scan">
            <a className={styles.link}>管理者用QRコードスキャナーへ</a>
          </Link>
        </li>
      </ul>
    </main>
  );
};
