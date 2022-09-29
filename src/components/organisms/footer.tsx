import { FC } from "react";
import styles from "styles/components.module.css";
import FooterKofunman from "components/atoms/faceOfKofunman";
import FooterEventIcon from "components/atoms/footerEvent";
import FooterMapIcon from "components/atoms/footerMapIcon";
import FooterTTIcon from "components/atoms/footerTTIcon";
import FooterConfigIcon from "components/atoms/footerConfig";

const Footer: FC = () => {
  return (
    <nav className={styles.footer}>
      <FooterKofunman size="30px" />
      <FooterEventIcon />
      <FooterMapIcon />
      <FooterTTIcon />
      <FooterConfigIcon />
    </nav>
  );
};

export default Footer;
