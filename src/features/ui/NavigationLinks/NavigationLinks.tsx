import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";
import { toggleIsNavigatonOpen } from "@/features/ui/NavigationLinks/NavigationSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { RootState } from "@/lib/store";

export const NavigationLinks = () => {
  const isOpen = useAppSelector(
    (state: RootState) => state.navigation.isNavigationOpen
  );
  const dispatch = useAppDispatch();
  return (
    <ul
      role="list"
      className={clsx(styles.navLinks, isOpen && styles.expanded)}
      onClick={() => dispatch(toggleIsNavigatonOpen())}
    >
      <li>
        <Link href="/">ホーム</Link>
      </li>
      <li>
        <Link href="/privacy">プライバシーポリシー</Link>
      </li>
      <li>
        <Link href="/faq">よくある質問へ</Link>
      </li>
      <li>
        <Link href="/mystery">アプリ用謎解き画面</Link>
      </li>
      <li>
        <Link href="/admin/mystery">管理者用謎解き画面へ</Link>
      </li>
      <li>
        <Link href="/admin/qr-scan">管理者用QRコードスキャナー</Link>
      </li>
    </ul>
  );
};
