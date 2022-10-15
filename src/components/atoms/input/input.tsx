import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./styles.module.css";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>(function InputboxBase({ className, type, ...props }, ref) {
  return (
    <input
      type={type}
      {...props}
      ref={ref}
      className={clsx(className, styles.module)}
    />
  );
});
