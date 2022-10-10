import { FC } from "react";
import styles from "styles/components.module.css";
import { InputItem } from "components/molecules/inputItem";
import { EntryDate } from "components/molecules/entryDate";

export const Authentication: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <div className={styles.authentication}>
        <InputItem />
        <InputItem />
        <InputItem />
        <InputItem />
        <EntryDate />
        <InputItem />
        <button className={styles.button} onClick={onClick}>
          次へ
        </button>
      </div>
    </>
  );
};

