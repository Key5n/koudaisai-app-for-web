import { FC } from "react";
import Router from "next/router";
import { useState } from "react";
import styles from "styles/components.module.css";

const BackButton: FC = () => {
  return (
    <button
      className={styles.backButton}
      onClick={() => {
        Router.back();
      }}
    >
      戻る
    </button>
  );
};

export default BackButton;
