import { FC } from "react";
import styles from "styles/components.module.css";
import { Text } from "components/atoms/text";
import { Input } from "components/atoms/input";

export const InputItem: FC = () => {
  return (
    <div className={styles.inputItem}>
      <Text text="テキスト" />
      <Input />
    </div>
  );
};
