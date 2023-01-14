import { Config } from "@/features/config";
import { createGetLayout } from "@/features/layouts/Layout";
import { NextPageWithLayout } from "@/lib/next/types";

const Page: NextPageWithLayout = () => {
  return <Config />;
};

Page.getLayout = createGetLayout("設定");

export default Page;
