import Image from "next/image";
import Link from "next/link";
import { AnchorButton } from "components/atoms/AnchorButton";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <nav className={styles.module}>
      <Link href="/">
        <AnchorButton>
          <Image
            src="/images/kofunman_face.png"
            alt="kofunman_face"
            width="30px"
            height="30px"
          />
        </AnchorButton>
      </Link>
      <Link href="/config">
        <AnchorButton>
          <Image
            src="/images/config_gray.svg"
            alt="config"
            width="30px"
            height="30px"
          />
        </AnchorButton>
      </Link>
    </nav>
  );
};
