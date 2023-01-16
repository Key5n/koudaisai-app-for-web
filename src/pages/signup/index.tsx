import { createGetLayoutWithoutFooter } from "@/features/layouts/LayoutWithoutFooter";
import { Signup } from "@/features/signup";
import { NextPageWithLayout } from "@/lib/next/types";

const Page: NextPageWithLayout = () => {
  return <Signup />;
};
Page.getLayout = createGetLayoutWithoutFooter({ title: "予約" });

export default Page;
