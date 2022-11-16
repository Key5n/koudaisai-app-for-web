import type { NextPage } from "next";
import { IndexTemplate } from "components/templates/IndexTemplate";
import { useUser } from "context/userContext";
import Link from "next/link";

const Index: NextPage = () => {
  const { loadingUser } = useUser();
  return (
    <>
      {loadingUser ? (
        <p>loading</p>
      ) : (
        <Link href="/admin/qr-scan">qrコード読み取り</Link>
      )}
    </>
  );
};

export default Index;
