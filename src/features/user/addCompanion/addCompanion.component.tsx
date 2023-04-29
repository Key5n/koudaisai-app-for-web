import styles from "./styles.module.css";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { AnchorButton } from "@/features/ui/AnchorButton";

export const AddCompanion: React.FC = () => {
  return (
    <div className={styles.module}>
      <div className={styles.mascotts}>
        <Image
          src="/images/kofunman_face.png"
          alt="kofunman"
          width="106px"
          height="106px"
        />
        <Image
          src="/images/faceOfTamago.png"
          alt="kofunman"
          width="121px"
          height="106px"
        />
      </div>
      <span className={styles.title}>同行者を追加する</span>
      <p className={styles.text}>
        代表者様に同行する方の予約を
        <br />
        2人まですることができます
      </p>
      <Link href={""}>
        <AnchorButton className={styles.button}>追加する</AnchorButton>
      </Link>
    </div>
  );
};
