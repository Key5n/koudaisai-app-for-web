import styles from "./styles.module.css";
import Image from "next/image";
import { KeyboardArrow } from "components/atoms/KeyBoardArrow";
import { User } from "types/types";
import { InputWithTitle } from "components/molecules/InputWithTitle";
import { useState } from "react";
import { Button } from "components/atoms/Button";
import clsx from "clsx";

type Props = {
  user: User;
  isParent: boolean;
};

export const UserObject = ({ user, isParent }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditting, setIsEditting] = useState(true);
  return (
    <div
      className={clsx(
        styles.module,
        isParent ? styles.borderOrange : styles.borderBlue
      )}
    >
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
          <div>
            <p>お名前</p>
            <p>{user?.name}</p>
          </div>
          <div>
            <p>メールアドレス</p>
            <p>{user?.email}</p>
          </div>
          <div>
            <p>電話番号</p>
            <p>{user?.phoneNumber}</p>
          </div>
          <div>
            <span>希望入場日</span>
            {user?.dayOneSelected && <p>・11/19(土)</p>}
            {user?.dayTwoSelected && <p>・11/20(日)</p>}
          </div>
          {isEditting && (
            <div className={styles.edit}>
              {isParent && <Button className={styles.delete}>削除</Button>}
              <Button className={styles.store}>保存</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
