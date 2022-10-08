import styles from "styles/components.module.css";
import { KeyboardArrow } from "components/atoms/keyBoardArrow";
import { QRIcon } from "components/atoms/qrIcon";

export const UserActionIcons: React.FC = () => {
  return (
    <span className={styles.userActionIcons}>
      <KeyboardArrow id="0" />
      <QRIcon />
    </span>
  );
};
