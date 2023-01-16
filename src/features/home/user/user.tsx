import styles from "./styles.module.css";
import clsx from "clsx";
import { UserObject } from "./userObject/userObject.component";
import Image from "next/image";
import { AddCompanion } from "./addCompanion";

export const User = () => {
  return (
    <div className={styles.module}>
      <div className={styles.kofunman}>
        <Image
          src="/images/kofunman_witiout_arms.png"
          alt="kofunman"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.userObjectWrapper}>
        <UserObject />
        <UserObject />
        <AddCompanion />
      </div>
    </div>
  );
};
