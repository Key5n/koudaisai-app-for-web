import styles from "styles/components.module.css";
import { UserObject } from "../userObject/userObject";
import { AddCompanion } from "../addCompanion";

export const UserObjectWrapper: React.FC = () => {
  return (
    <div className={styles.userObjectWrapper}>
      <UserObject name={"落単古墳マン"} />
      <UserObject name={"2号館たまごちゃん"} />
      <AddCompanion />
    </div>
  );
};
