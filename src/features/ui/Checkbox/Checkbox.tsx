import styles from "./styles.module.css";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  className?: string;
  labelProps: Omit<ComponentPropsWithoutRef<"label">, "htmlFor" | "className">;
  inputProps: Omit<ComponentPropsWithoutRef<"input">, "id">;
  error?: string;
};

export const Checkbox = ({
  className,
  labelProps: { children, ...labelProps },
  inputProps,
  error,
}: Props) => {
  return (
    <div className={clsx(className, styles.module)}>
      <label {...labelProps}>
        <input type="checkbox" {...inputProps} />
        <span className={styles.checkbox}>{children}</span>
      </label>
      <div className={styles.bottom}>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};
