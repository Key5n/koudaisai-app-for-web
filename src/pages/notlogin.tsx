import { NextPageWithLayout } from "@/lib/next/types";
import { createGetLayoutWithFooter } from "@/features/layouts/BasicLayout";
import { Home } from "@/features/home";

const Page: NextPageWithLayout = () => {
  return <Home />;
};
Page.getLayout = createGetLayoutWithFooter({ title: "第60回工大祭" });
export default Page;
