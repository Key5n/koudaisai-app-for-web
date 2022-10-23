import { FC } from "react";
import styles from "styles/components.module.css";
import { InputItem } from "components/molecules/inputItem";
import { EntryDate } from "components/molecules/entryDate";

export const Authentication: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <div className={styles.authentication}>
        <InputItem text={"お名前"} />
        <InputItem text={"メールアドレス"} />
        <InputItem text={"電話番号"} />
        <EntryDate />
        <button className={styles.button} onClick={onClick}>
          次へ
        </button>
      </div>
    </>
  );
};
