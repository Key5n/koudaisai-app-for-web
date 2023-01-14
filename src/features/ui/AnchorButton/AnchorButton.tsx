import styles from "./styles.module.css";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import clsx from "clsx";

export const AnchorButton = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a">
>(function AnchorBase({ className, ...props }, ref) {
  return <a {...props} ref={ref} className={clsx(styles.module, className)} />;
});
