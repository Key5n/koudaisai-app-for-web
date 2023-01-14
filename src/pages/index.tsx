// import type { NextPage } from "next";
// import { IndexTemplate } from "components/templates/IndexTemplate";
// import { useUser } from "context/userContext";
// import Link from "next/link";
// import { ConfigTemplate } from "components/templates/ConfigTemplate";

import { AnchorButton } from "@features/ui/AnchorButton";
import { Button } from "@features/ui/Button";
import { Input } from "@features/ui/Input";
import { NextPageWithLayout } from "@lib/next/types";
import { createGetLayout } from "@layouts/Layout";

const Index: NextPageWithLayout = () => {
  return (
    <>
      <p>indexa</p>
      <Button>aiueo</Button>
      <Input />
      <AnchorButton>aa</AnchorButton>
    </>
  );
};
Index.getLayout = createGetLayout("第60回工大祭");
export default Index;
