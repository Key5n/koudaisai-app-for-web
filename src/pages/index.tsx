import type { NextPage } from "next";
import { IndexTemplate } from "components/templates/IndexTemplate";
import { useUser } from "context/userContext";

const Index: NextPage = () => {
  const { user, loadingUser } = useUser();
  return <>{loadingUser ? <p>loading</p> : ""}</>;
};

export default Index;
