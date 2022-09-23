import { FC } from "react";
import styles from "styles/components.module.css";
import FooterKofunmanIcon from "components/atoms/footerKofunman";
import FooterEventIcon from "components/atoms/footerEvent";
import FooterMapIcon from "components/atoms/footerMapIcon";
import FooterTTIcon from "components/atoms/footerTTIcon";
import FooterConfigIcon from "components/atoms/footerConfig";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <FooterKofunmanIcon />
      <FooterEventIcon />
      <FooterMapIcon />
      <FooterTTIcon />
      <FooterConfigIcon />
    </div>
  );
};

export default Footer;
