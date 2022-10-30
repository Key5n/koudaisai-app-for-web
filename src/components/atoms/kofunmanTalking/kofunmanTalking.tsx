import styles from "styles/components.module.css";
import Image from "next/image";

export const KofunmanTalking = ({ line }: { line?: string }) => {
  return (
    <div className={styles.module}>
      <Image
        src="/images/kofunman_Hi.svg"
        alt="kofunman_Hi"
        width={50}
        height={102}
      />
      <span className={styles.line}>{line}</span>
    </div>
  );
};
