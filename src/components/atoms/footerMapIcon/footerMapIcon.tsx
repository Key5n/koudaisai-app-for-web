import Image from "next/image";
import { FC } from "react";
import styles from "styles/components.module.css";

export const FooterMapIcon: FC = () => {
  return (
    <Image
      src="/images/map_gray.svg"
      alt="map_icon"
      width={"30px"}
      height={"30px"}
    />
  );
};

