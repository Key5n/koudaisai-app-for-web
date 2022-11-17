import type { NextPage } from "next";
import { IndexTemplate } from "components/templates/IndexTemplate";
import { useUser } from "context/userContext";
import Link from "next/link";
import { ConfigTemplate } from "components/templates/ConfigTemplate";

const Index: NextPage = () => {
  const { loadingUser } = useUser();
  return (
    <>
      {loadingUser ? (
        <p>loading</p>
      ) : (
        <ConfigTemplate />
      )}
    </>
  );
};

export default Index;
