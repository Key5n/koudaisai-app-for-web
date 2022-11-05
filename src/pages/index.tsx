import type { NextPage } from "next";
import { IndexTemplate } from "components/templates/IndexTemplate";
import { useUser } from "context/userContext";

const Index: NextPage = () => {
  // const { user, loadingUser } = useUser();
  return (
    // <>
    //   {loadingUser ? (
    //     <p>loading</p>
    //   ) : (
    //     // <IndexTemplate />
    //     <p>a</p>
    //   )}
    // </>
    <p>now developing this page</p>
  );
};

export default Index;
