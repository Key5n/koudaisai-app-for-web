import { createGetLayout } from "@/features/layouts/Layout";
import { Signup } from "@/features/signup";
import { NextPageWithLayout } from "@/lib/next/types";

const Page: NextPageWithLayout = () => {
  return <Signup />;
};
Page.getLayout = createGetLayout("予約");

export default Page;
