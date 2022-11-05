import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
  line: string;
};

export const KofunmanTalking = ({ line }: Props) => {
  return (
    <div className={styles.module}>
      <Image
        src="/images/kofunman_Hi.png"
        alt="kofunman_Hi"
        width="50"
        height="102"
      />
      <span className={styles.line}>{line}</span>
    </div>
  );
};
