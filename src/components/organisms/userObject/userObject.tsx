import styles from "./styles.module.css";
import Image from "next/image";
import { KeyboardArrow } from "components/atoms/KeyBoardArrow";
import { User } from "types/types";
import { useState } from "react";
import clsx from "clsx";

type Props = {
  user: User;
};

export const UserObject = ({ user }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={clsx(
        styles.module,
        user.parentId === null ? styles.borderOrange : styles.borderBlue
      )}
    >
      <div className={styles.userHead}>
        <span className={styles.userName}>{user?.name}</span>
        <span className={styles.KeyBoardArrow}>
          <KeyboardArrow
            isChecked={isChecked}
            toggle={() => {
              setIsChecked(!isChecked);
            }}
          />
        </span>
      </div>
      {isChecked && (
        <div className={styles.property}>
          {Object.entries(user).map(([key, value]) => {
            return (
              <div key={key}>
                <p>{key}</p>
                <p>{value}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
