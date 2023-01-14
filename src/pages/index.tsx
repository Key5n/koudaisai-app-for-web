import { NextPageWithLayout } from "@/lib/next/types";
import { createGetLayout } from "@/features/layouts/Layout";
import { Home } from "@/features/home";

const Index: NextPageWithLayout = () => {
  return <Home />;
};
Index.getLayout = createGetLayout("第60回工大祭");
export default Index;
