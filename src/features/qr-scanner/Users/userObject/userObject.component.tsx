import styles from "./styles.module.css";
import clsx from "clsx";
import { useState } from "react";
import { Arrow } from "./arrow";
import { User } from "@/types/types";

type Props = {
  user: User;
};
export const UserObject = ({ user }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={clsx(
        styles.module,
        /* user.parentId === null ?  styles.borderOrange : */ styles.borderBlue
      )}
    >
      <div className={styles.userHead}>
        <span className={styles.userName}>名工太郎様</span>
        <Arrow
          isChecked={isChecked}
          toggle={() => {
            setIsChecked(!isChecked);
          }}
        />
      </div>
      <div className={clsx(styles.property, isChecked && styles.open)}>
        <div>
          <p>ユーザーID</p>
          {/* <p>{user.uid}</p> */}
        </div>
        <div>
          <p>お名前</p>
          {/* <p>{user.name}</p> */}
        </div>
        <div>
          <p>メールアドレス</p>
          {/* <p>{user.email}</p> */}
        </div>
        <div>
          <p>電話番号</p>
          {/* <p>{user.phoneNumber ?? "登録なし"}</p> */}
        </div>
        <div>
          <p>予約日</p>
          {/* <p>11/19(土): {user.dayOneSelected ? "予約あり" : "予約なし"}</p> */}
          {/* <p>11/20(日): {user.dayTwoSelected ? "予約あり" : "予約なし"}</p> */}
        </div>
        <div>
          <p>入場した日</p>
          {/* <p>11/19(土): {user.dayOneVisited ? "入場済み" : "未入場"}</p> */}
          {/* <p>11/20(日): {user.dayTwoVisited ? "入場済み" : "未入場"}</p> */}
        </div>
      </div>
    </div>
  );
};
