import { Config } from "@/features/config";
import { createGetLayoutWithFooter } from "@/features/layouts/BasicLayout";
import { NextPageWithLayout } from "@/lib/next/types";

const Page: NextPageWithLayout = () => {
  return <Config />;
};

Page.getLayout = createGetLayoutWithFooter({ title: "設定" });

export default Page;
