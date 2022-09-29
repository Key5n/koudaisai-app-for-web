import UserActionIcons from "./userActionIcons";
import UserName from "components/atoms/userName";
import styles from "styles/components.module.css";

const UserHeader: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className={styles.userHeader}>
      <UserName name={name} />
      <UserActionIcons />
    </div>
  );
};

export default UserHeader;
