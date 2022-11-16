import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  isChecked: boolean;
  toggle: () => void;
};

export const KeyboardArrow = ({ isChecked, toggle }: Props) => {
  return (
    <label className={styles.module}>
      <input type="checkbox" checked={isChecked} onChange={toggle} />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(!isChecked && styles.halfRotate)}
      >
        <path
          d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
          fill="black"
        />
      </svg>
    </label>
  );
};
