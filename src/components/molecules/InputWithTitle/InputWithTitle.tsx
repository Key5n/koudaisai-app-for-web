import styles from "./styles.module.css";
import { Text } from "components/atoms/text";
import { Dispatch, SetStateAction } from "react";
import { Input } from "components/atoms/input";

type mysteryObj = {
  numOfChallenger: number;
  numOfSolvedPeople: number;
  numOfNewChallenger: number;
  numOfNewSolvedPeople: number;
};

type Props = {
  title: string;
  value: number;
  onMinusClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onPlusClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputWithTitle = ({
  title,
  value,
  onMinusClick,
  onPlusClick,
  handleInputChange,
}: Props) => {
  return (
    <div className={styles.module}>
      <Text text={title} />
      <div className={styles.content}>
        <button className={styles.button} onClick={onMinusClick} type="button">
          -1
        </button>
        <Input
          type="text"
          className={styles.value}
          value={value}
          max={999}
          min={-10}
          onChange={handleInputChange}
        />
        <button className={styles.button} onClick={onPlusClick} type="button">
          +1
        </button>
      </div>
    </div>
  );
};
