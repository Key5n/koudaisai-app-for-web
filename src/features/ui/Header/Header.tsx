import styles from "./styles.module.css";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import { Hamburger } from "./Hamburger";

type Props = {
  className?: string;
} & ComponentPropsWithoutRef<"header">;
export const Header = ({ className, children, ...props }: Props) => {
  return (
    <>
      <header {...props} className={clsx(styles.module, className)}>
        {children}
        <Hamburger />
      </header>
    </>
  );
};
