import styles from "./styles.module.css";
import { QRScanner } from "components/organisms/QRScanner";
import { Header } from "components/organisms/header";

export const QRScanTemplate = () => {
  return (
    <>
      <Header title="QR読み取り" />
      <main className={styles.module}>
        <QRScanner />
      </main>
    </>
  );
};
