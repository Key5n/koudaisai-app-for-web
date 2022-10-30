import styles from "styles/components.module.css";
import Image from "next/image";
import { KeyboardArrow } from "components/atoms/KeyBoardArrow";

export const UserObject: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className={styles.module}>
      <span className={styles.userName}>{name}</span>
      <span className={styles.userActionIcons}>
        <KeyboardArrow id="0" />
        <Image
          src="/images/qr_icon.svg"
          alt="QRCode"
          width="24px"
          height="24px"
        />
      </span>
    </div>
  );
};
