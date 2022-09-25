import Link from "next/link";
import { FC } from "react";
import styles from "styles/components.module.css";
import BackButton from "components/atoms/backButton";

const Header: FC<{ url?: string }> = ({ url }) => {
  return (
    <header className={styles.header}>
      <BackButton />
      予約
    </header>
  );
};

export default Header;
