import Image from "next/image";
import { FC } from "react";
import styles from "styles/components.module.css";

export const FooterEventIcon: FC = () => {
  return (
    <Image
      src="/images/event_gray.svg"
      alt="event_icon_gray"
      width={"30px"}
      height={"30px"}
    />
  );
};

