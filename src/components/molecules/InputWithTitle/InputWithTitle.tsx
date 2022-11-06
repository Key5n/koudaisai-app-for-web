import styles from "./styles.module.css";
import { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import { Input } from "components/atoms/Input";
import clsx from "clsx";

type Props = {
  className?: string;
  labelProps: Omit<ComponentPropsWithoutRef<"label">, "htmlFor" | "className">;
  inputProps: Omit<ComponentPropsWithRef<"input">, "id">;
  description?: string;
  error?: string;
};

export const InputWithTitle = ({
  className,
  labelProps: { children, ...labelProps },
  inputProps,
  description,
  error,
}: Props) => {
  return (
    <div className={clsx(className, styles.module)}>
      <label {...labelProps}>
        <span className={styles.title}>{children}</span>
        <Input
          {...inputProps}
          className={clsx(inputProps?.className, styles.input)}
        />
      </label>
      <div className={styles.bottom}>
        {description && <p className={styles.description}>{description}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};
