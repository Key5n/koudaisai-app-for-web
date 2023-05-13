import { createGetLayoutWithFooter } from "@/features/layouts/BasicLayout";
import { QRScanner } from "@/features/qr-scanner";
import { NextPageWithLayout } from "@/lib/next/types";

const Page: NextPageWithLayout = () => {
  return <QRScanner />;
};

Page.getLayout = createGetLayoutWithFooter({ title: "QR読み取り" });

export default Page;
