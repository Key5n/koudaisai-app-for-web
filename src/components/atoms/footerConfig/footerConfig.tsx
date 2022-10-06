import Image from "next/image";
import { FC } from "react";
import styles from "styles/components.module.css";

const FooterConfigIcon: FC = () => {
  return (
    <Image
      src="/images/config_gray.svg"
      alt="config_gray"
      width={"30px"}
      height={"30px"}
    />
  );
};

export default FooterConfigIcon;
