import Image from "next/image";
import { FC } from "react";
import styles from "styles/components.module.css";

const FooterKofunmanIcon: FC = () => {
  return (
    <Image
      src="/images/kofunman_face.png"
      alt="kohunmanFace"
      width={"30px"}
      height={"30px"}
    />
  );
};

export default FooterKofunmanIcon;
