import styles from "./styles.module.css";
import { Text } from "components/atoms/text";
import { LargeText } from "components/atoms/largeText";

export const HeadAndField: React.FC<{ property: string; value: string }> = ({
  property,
  value,
}) => {
  return (
    <div className={styles.module}>
      <Text text={property} />
      <LargeText text={value} />
    </div>
  );
};
