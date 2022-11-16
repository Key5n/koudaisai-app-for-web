import styles from "./styles.module.css";
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
        <KeyboardArrow
          isChecked={isChecked}
          toggle={() => {
            setIsChecked(!isChecked);
          }}
        />
      </div>
      {isChecked && (
        <div className={styles.property}>
          <div>
            <p>ユーザーID</p>
            <p>{user.uid}</p>
          </div>
          <div>
            <p>お名前</p>
            <p>{user.name}</p>
          </div>
          <div>
            <p>メールアドレス</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p>電話番号</p>
            <p>{user.phoneNumber ?? "登録なし"}</p>
          </div>
          <div>
            <p>予約日</p>
            <p>11/19(土): {user.dayOneSelected ? "予約あり" : "予約なし"}</p>
            <p>11/20(日): {user.dayTwoSelected ? "予約あり" : "予約なし"}</p>
          </div>
          <div>
            <p>入場した日</p>
            <p>11/19(土): {user.dayOneVisited ? "入場済み" : "未入場"}</p>
            <p>11/20(日): {user.dayTwoVisited ? "入場済み" : "未入場"}</p>
          </div>
        </div>
      )}
    </div>
  );
};
