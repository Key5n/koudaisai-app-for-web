import styles from "./styles.module.css";
import { Header } from "components/organisms/header";
import { Footer } from "components/organisms/footer";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { Button } from "components/atoms/Button";

export const ConfigTemplate = () => {
  const signout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log("サインアウトしました");
    } catch (error) {
      console.log(error);
    }
  };
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
        <Button onClick={signout}>ログアウト</Button>
      </main>
      <Footer />
    </>
  );
};
