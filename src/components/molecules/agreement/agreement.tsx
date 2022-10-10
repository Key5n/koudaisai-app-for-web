import { FC } from "react";
import styles from "styles/components.module.css";
import { AgreementButton } from "components/atoms/agreementButton";

export const Agreement: FC = () => {
  return (
    <div className={styles.agreement}>
      <AgreementButton param="/" str="同意しない" />
      <AgreementButton param="#modal-agreement" str="同意する" />
    </div>
  );
};
