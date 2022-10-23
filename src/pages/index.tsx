import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ReservationTemplate } from "components/templates/ReservationTemplate";
import Link from "next/link";

const Index: NextPage = () => {
  const router = useRouter();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Link href={"/privacy"}>プライバシーポリシーへ</Link>
      <Link href={"/admin/mystery"}>謎解き画面へ</Link>
      <Link href={"/mystery"}>アプリ用謎解き画面へ</Link>
      <Link href={"/signup"}>予約画面へ</Link>
      {/* <ReservationTemplate /> */}
    </div>
  );
};

export default Index;
