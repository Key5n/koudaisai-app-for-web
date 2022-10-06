import { FC } from "react";
import Router from "next/router";
import { useState } from "react";
import styles from "styles/components.module.css";

export const BackButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={styles.backButton} onClick={onClick}>
      戻る
    </button>
  );
};

