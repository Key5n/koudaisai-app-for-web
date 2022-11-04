import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "context/userContext";

const Index: NextPage = () => {
  const { user, loadingUser } = useUser();
  return (
    <>
      {loadingUser ? (
        <p>loading</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h1>クライアント用</h1>
          <Link href={"/privacy"}>プライバシーポリシーへ</Link>
          <Link href={"/mystery"}>アプリ用謎解き画面へ</Link>
          <Link href={"/faq"}>よくある質問へ</Link>
          <h1>運営用(認証の必要あり)</h1>
          <Link href={"/admin/mystery"}>謎解き画面へ</Link>
          <Link href={"/admin/signup"}>予約画面へ(未実装)</Link>
          <Link href={"/admin/login"}>ログイン画面へ</Link>
          <p>{user?.email ?? "email is undefined"}</p>
          <p>{user?.uid ?? "uid is undefined"}</p>
        </div>
      )}
    </>
  );
};

export default Index;
