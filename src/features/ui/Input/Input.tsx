import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./styles.module.css";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>(function InputBase({ className, ...props }, ref) {
  return (
    <input {...props} ref={ref} className={clsx(className, styles.module)} />
  );
});
