import styles from "styles/components.module.css";
import QRIcon from "components/atoms/qrIcon";
import KeyboardArrow from "components/atoms/keyBoardArrow";

const UserActionIcons: React.FC = () => {
  return (
    <span className={styles.userActionIcons}>
      <KeyboardArrow id="0" />
      <QRIcon />
    </span>
  );
};

export default UserActionIcons;
