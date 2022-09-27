import { FC } from "react";
import Link from "next/link";
import styles from "styles/components.module.css";

const AgreementButton: FC<{ param: string; str: string }> = ({
  param,
  str,
}) => {
  return (
    <a className={styles.agreementButton} href={param}>
      {str}
    </a>
  );
};

export default AgreementButton;
