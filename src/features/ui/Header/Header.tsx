import styles from "./styles.module.css";
import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = {
  className?: string;
} & ComponentPropsWithoutRef<"header">;
export const Header = ({ className, ...props }: Props) => {
  return <header {...props} className={clsx(styles.module, className)} />;
};
