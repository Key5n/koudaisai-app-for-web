import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";

export const NavigationLinks = () => {
  return (
    <ul role="list" className={clsx(styles.navLinks, styles.expanded)}>
      <li>
        <Link href="/privacy">プライバシーポリシー</Link>
      </li>
      <li>
        <Link href="/faq">よくある質問へ</Link>
      </li>
      <li>
        <Link href="/mystery">アプリ用謎解き画面</Link>
      </li>
      {/* <li><Link href="/triathlon">アプリ用トライアスロン画面</Link></li> */}
      <li>
        <Link href="/admin/mystery">管理者用謎解き画面へ</Link>
      </li>
      <li>
        <Link href="/qr-scan">管理者用QRコードスキャナー</Link>
      </li>
    </ul>
  );
};
