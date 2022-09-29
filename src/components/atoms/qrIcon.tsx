import styles from "styles/components.module.css";
import Image from "next/image";

const QRIcon: React.FC = () => {
  return (
    <Image src="/images/qr_icon.svg" alt="QRCode" width="24px" height="24px" />
  );
};

export default QRIcon;
