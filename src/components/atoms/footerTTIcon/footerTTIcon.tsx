import Image from "next/image";
import { FC } from "react";
import styles from "styles/components.module.css";

export const FooterTTIcon: FC = () => {
  return (
    <Image src="/images/TT_gray.svg" alt="TT" width={"30px"} height={"30px"} />
  );
};

