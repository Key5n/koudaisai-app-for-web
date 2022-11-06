import styles from "./styles.module.css";
import Image from "next/image";
import { KeyboardArrow } from "components/atoms/KeyBoardArrow";
import { User } from "types/types";
import { InputWithTitle } from "components/molecules/InputWithTitle";
import { useState } from "react";

type Props = {
  user: User;
};

export const UserObject = ({ user }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.module}>
      <div className={styles.userHead}>
        <span className={styles.userName}>{user?.name}</span>
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
      </div>
      {isChecked && (
        <div className={styles.property}>
          {Object.entries(user!).map(([key, value], index) => {
            return (
              <InputWithTitle
                key={index}
                labelProps={{ children: key }}
                inputProps={{ disabled: true, value: `${value}` ?? "null" }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
