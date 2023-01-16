import { NextPageWithLayout } from "@/lib/next/types";
import { Home } from "@/features/home";
import { createGetLayoutWithFooter } from "@/features/layouts/LayoutWithFooter";
import { User } from "@/features/home/user";
import { useState } from "react";

const Page: NextPageWithLayout = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle ? <Home /> : <User />}
      <button
        onClick={() => {
          setToggle(() => !toggle);
        }}
      >
        切り替え
      </button>
    </>
  );
};
Page.getLayout = createGetLayoutWithFooter({ title: "第60回工大祭" });
export default Page;
