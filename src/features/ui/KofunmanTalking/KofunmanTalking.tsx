import styles from "./styles.module.css";
import clsx from "clsx";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  line: ComponentPropsWithoutRef<"span">;
};

export const KofunmanTalking = ({ line: { children } }: Props) => {
  return (
    <div className={styles.module}>
      <Image
        src="/images/kofunman_Hi.png"
        alt="kofunman_Hi"
        width="50"
        height="102"
      />
      <span className={styles.line}>{children}</span>
    </div>
  );
};
