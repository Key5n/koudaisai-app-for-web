import { NextPageWithLayout } from "@/lib/next/types";
import { Home } from "@/features/home";
import { User } from "@/features/home/user";
import { useState } from "react";
import { Button } from "@/features/ui/Button";
import { createGetLayoutWithFooter } from "@/features/layouts/BasicLayout";

const Page: NextPageWithLayout = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        切り替え
      </Button>
      {toggle ? <Home /> : <User />}
    </>
  );
};
Page.getLayout = createGetLayoutWithFooter({ title: "第60回工大祭" });
export default Page;
