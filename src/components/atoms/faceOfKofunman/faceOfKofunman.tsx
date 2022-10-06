import Image from "next/image";
import { FC } from "react";
import styles from "styles/components.module.css";

const FaceOfKofunman: FC<{ size: string }> = ({ size }) => {
  return (
    <Image
      src="/images/kofunman_face.png"
      alt="kohunmanFace"
      width={size}
      height={size}
    />
  );
};

export default FaceOfKofunman;
