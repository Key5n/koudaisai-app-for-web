import styles from "./styles.module.css";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import { Hamburger } from "./Hamburger";
import Image from "next/image";
import koudaisaiIcon from "@/assets/daisai.svg";

type Props = {
  className?: string;
} & ComponentPropsWithoutRef<"header">;
export const Header = ({ className, children, ...props }: Props) => {
  return (
    <>
      <header {...props} className={clsx(styles.module, className)}>
        <Image
          src={koudaisaiIcon}
          width="40px"
          height="40px"
          alt="工大祭アイコン"
        />
        {children}
        <Hamburger />
      </header>
    </>
  );
};
