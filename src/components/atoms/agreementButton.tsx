import { FC } from "react";
import Link from "next/link";
import styles from "styles/components.module.css";

const AgreementButton: FC<{ param: string; str: string }> = ({
  param,
  str,
}) => {
  return (
    <Link href={param}>
      <a className={styles.agreementButton}>{str}</a>
    </Link>
  );
};

export default AgreementButton;
