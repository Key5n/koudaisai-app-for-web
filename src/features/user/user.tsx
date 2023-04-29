import styles from "./styles.module.css";
import clsx from "clsx";
import Image from "next/image";
import { AddCompanion } from "./addCompanion";
import { UserObject } from "./userObject";
import { User as UserType } from "@/types/types";

type Props = {
  users: UserType[];
};
export const User = ({ users }: Props) => {
  return (
    <div className={styles.module}>
      <div className={styles.kofunman}>
        <Image
          src="/images/kofunman_witiout_arms.png"
          alt="kofunman"
          layout="fill"
        />
      </div>
      <div className={styles.userObjectWrapper}>
        {users.map((user) => {
          return <UserObject user={user} key={user.uid} />;
        })}
        <AddCompanion />
      </div>
    </div>
  );
};
