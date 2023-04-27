import { NextPageWithLayout } from "@/lib/next/types";
import { User } from "@/features/home/user";
import { createGetLayoutWithFooter } from "@/features/layouts/BasicLayout";

const Page: NextPageWithLayout = () => {
  return <User />;
};
Page.getLayout = createGetLayoutWithFooter({ title: "第60回工大祭" });
export default Page;
