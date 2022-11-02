import styles from "./styles.module.css";
import { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import { Input } from "components/atoms/Input";

type Props = {
  title: string;
  placeholder?: string;
  description?: string;
};

export const InputWithTitle = ({ title, placeholder, description }: Props) => {
  return (
    <div className={styles.module}>
      <span className={styles.title}>{title}</span>
      <Input className={styles.input} placeholder={placeholder} />
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
