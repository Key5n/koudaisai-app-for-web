import Link from "next/link";
import { FC } from "react";
import styles from "styles/components.module.css";
import BackButton from "components/atoms/backButton";

const Header: FC<{ displayBack: boolean; onClick: () => void }> = ({
  displayBack,
  onClick,
}) => {
  return (
    <header className={styles.header}>
      {displayBack && <BackButton onClick={onClick} />}
      予約
    </header>
  );
};

export default Header;
