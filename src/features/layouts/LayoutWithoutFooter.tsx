import Head from "next/head";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import { Header } from "../ui/Header";
import styles from "./styles.module.css";

export const createGetLayoutWithoutFooter = ({
  title,
}: {
  title: string;
}): ((page: ReactElement) => ReactNode) => {
  return function getLayout(page: ReactElement) {
    return (
      <LayoutWithoutFooter headerProps={{ children: title }}>
        {page}
      </LayoutWithoutFooter>
    );
  };
};

type LayoutProps = {
  children: ReactElement;
  headerProps: ComponentPropsWithoutRef<"header">;
};

export const LayoutWithoutFooter = ({ children, headerProps }: LayoutProps) => {
  return (
    <div className={styles.module}>
      <Head>
        <title>第60回工大祭</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="第60回工大祭のスマホアプリのweb版です。スマホアプリの使用をお勧めします。"
        />
      </Head>
      <Header {...headerProps} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
