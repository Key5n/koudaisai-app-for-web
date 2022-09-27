import { FC } from "react";
import AgreementButton from "components/atoms/agreementButton";
import styles from "styles/components.module.css";

const Agreement: FC = () => {
  return (
    <div className={styles.agreement}>
      <AgreementButton param="/" str="同意しない" />
      <AgreementButton param="#modal-agreement" str="同意する" />
    </div>
  );
};

export default Agreement;
