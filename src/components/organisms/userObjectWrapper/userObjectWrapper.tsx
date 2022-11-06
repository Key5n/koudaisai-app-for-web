import styles from "./styles.module.css";
import { UserObject } from "../userObject/userObject";
import { AddCompanion } from "../addCompanion";
import { User } from "types/types";

type Props = {
  user1: User;
  user2?: User;
};

export const UserObjectWrapper = ({ user1, user2 }: Props) => {
  console.log(user1);
  return (
    <div className={styles.module}>
      <UserObject user={user1} />
      <AddCompanion />
    </div>
  );
};
