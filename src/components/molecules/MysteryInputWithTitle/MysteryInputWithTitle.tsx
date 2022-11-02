import styles from "./styles.module.css";
import { Input } from "components/atoms/Input";
import { forwardRef } from "react";

type Props = {
  title: string;
  value: number;
  onMinusClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onPlusClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref: React.RefObject<HTMLInputElement>;
};

export const MysteryInputWithTitle = forwardRef<HTMLInputElement, Props>(
  function InputWithTitleBase(
    { title, onMinusClick, value, onPlusClick, handleInputChange },
    ref
  ) {
    return (
      <div className={styles.module}>
        <span className={styles.title}>{title}</span>
        <div className={styles.content}>
          <button
            className={styles.button}
            onClick={onMinusClick}
            type="button"
          >
            -1
          </button>
          <Input
            type="text"
            className={styles.value}
            value={value}
            max={999}
            min={-999}
            onChange={handleInputChange}
            ref={ref}
          />
          <button className={styles.button} onClick={onPlusClick} type="button">
            +1
          </button>
        </div>
      </div>
    );
  }
);
