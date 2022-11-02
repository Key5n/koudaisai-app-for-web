import Link from "next/link";
import { FC } from "react";
import styles from "styles/components.module.css";

type Props = {
  displayBack: boolean;
  onClick: () => void;
  title: string;
};

export const Header = ({ displayBack, onClick, title }: Props) => {
  return <header className={styles.header}>{title}</header>;
};
