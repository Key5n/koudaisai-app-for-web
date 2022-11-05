import styles from "./styles.module.css";
import Image from "next/image";
import { KeyboardArrow } from "components/atoms/KeyBoardArrow";
import { User } from "types/types";
import { useState } from "react";

type Props = {
  user: User;
};

export const UserObject = ({ user }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.module}>
      <span className={styles.userName}>{user?.email}</span>
      <span className={styles.userActionIcons}>
        <KeyboardArrow
          isChecked={isChecked}
          toggle={() => {
            setIsChecked(!isChecked);
          }}
        />
        <Image
          src="/images/qr_icon.svg"
          alt="QRCode"
          width="24px"
          height="24px"
        />
      </span>
      <div className={styles.property}></div>
    </div>
  );
};
