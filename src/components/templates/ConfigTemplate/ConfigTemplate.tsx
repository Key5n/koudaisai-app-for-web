import styles from "./styles.module.css";
import { Header } from "components/organisms/header";
import { Footer } from "components/organisms/footer";
import Link from "next/link";

export const ConfigTemplate = () => {
  return (
    <>
      <Header title="設定" />
      <main className={styles.module}>
        <h1>クライアント用</h1>
        <Link href={"/privacy"}>プライバシーポリシーへ</Link>
        <Link href={"/mystery"}>アプリ用謎解き画面へ</Link>
        <Link href={"/faq"}>よくある質問へ</Link>
        <h1>運営用(認証の必要あり)</h1>
        <Link href={"/admin/mystery"}>謎解き画面へ</Link>
        <Link href={"/admin/signup"}>予約画面へ(未実装)</Link>
        <Link href={"/admin/login"}>ログイン画面へ</Link>
      </main>
      <Footer />
    </>
  );
};
