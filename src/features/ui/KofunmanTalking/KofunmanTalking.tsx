import styles from "./styles.module.css";
import clsx from "clsx";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  line: ComponentPropsWithoutRef<"span">;
  mode: number;
};

export const KofunmanTalking = ({ line: { children }, mode }: Props) => {
  return (
    <div className={styles.module}>
      {mode == 0 && (
        <Image
          src="/images/kofunman_Hi.png"
          alt="kofunman_Hi"
          width="50"
          height="102"
        />
      )}
      {mode == 1 && (
        <Image
          src="/images/kofunman_sorry.png"
          alt="kofunman_sorry"
          width="50"
          height="102"
        />
      )}
      <span className={styles.line}>{children}</span>
    </div>
  );
};
