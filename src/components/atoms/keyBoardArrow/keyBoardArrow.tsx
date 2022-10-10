import { FC } from "react";
import styles from "styles/components.module.css";
import Image from "next/image";

export const KeyboardArrow: FC<{ id: "0" | "1" | "2" }> = ({ id }) => {
  return (
    <>
      <input type="checkbox" id={id} />
      <label className={styles.keyboardArrow} htmlFor={id}>
        <Image
          src="/images/arrow_direction=up.svg"
          alt="arrow"
          width="24px"
          height="24px"
        ></Image>
      </label>
    </>
  );
};

