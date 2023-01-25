import { createGetLayoutWithFooter } from "@/features/layouts/LayoutWithFooter";
import { QRScanner } from "@/features/qr-scan";
import { NextPageWithLayout } from "@/lib/next/types";

const Page: NextPageWithLayout = () => {
  return <QRScanner />;
};

Page.getLayout = createGetLayoutWithFooter({ title: "QR読み取り" });
