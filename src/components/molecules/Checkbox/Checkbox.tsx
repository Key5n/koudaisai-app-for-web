import styles from "./styles.module.css";
import { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";

type Props = {
  className?: string;
  labelProps: Omit<ComponentPropsWithoutRef<"label">, "htmlFor" | "className">;
  inputProps: Omit<ComponentPropsWithRef<"input">, "id">;
  error?: string;
};

export const Checkbox = ({
  className,
  labelProps: { children, ...labelProps },
  inputProps,
  error,
}: Props) => {
  return (
    <>
      <label {...labelProps}>
        <input type="checkbox" {...inputProps} />
        <span className={styles.checkbox}>{children}</span>
      </label>
      <div className={styles.bottom}>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </>
  );
};
