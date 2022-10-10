import { UserActionIcons } from "../userActionIcons";
import { UserName } from "components/atoms/userName";
import styles from "styles/components.module.css";

export const UserHeader: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className={styles.userHeader}>
      <UserName name={name} />
      <UserActionIcons />
    </div>
  );
};
