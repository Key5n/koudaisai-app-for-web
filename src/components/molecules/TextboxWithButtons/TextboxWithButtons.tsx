import styles from "./styles.module.css";
import { useState } from "react";
import Image from "next/image";
import { LargeText } from "components/atoms/largeText";

export const TextboxWithButtons: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className={styles.module}>
      <Image
        src="/images/exposure_neg_1_FILL0_wght400_GRAD0_opsz48.svg"
        width={"36px"}
        height={"36px"}
        alt="minus"
      />
      <LargeText text={value} />
      <Image
        src="/images/exposure_plus_1_FILL0_wght400_GRAD0_opsz48.svg"
        width={"36px"}
        height={"36px"}
        alt="plus"
      />
    </div>
  );
};
