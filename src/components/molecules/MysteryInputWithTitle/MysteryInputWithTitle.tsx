import styles from "./styles.module.css";
import { Input } from "components/atoms/Input";
import { forwardRef } from "react";

type Props = {
  title: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMinusClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onPlusClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  ref: React.RefObject<HTMLInputElement>;
};

export const MysteryInputWithTitle = forwardRef<HTMLInputElement, Props>(
  function InputWithTitleBase(
    { title, onMinusClick, value, onPlusClick,onChange },
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
            type="number"
            className={styles.value}
            value={value}
            onChange={onChange}
            max={999}
            min={-999}
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
