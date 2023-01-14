import { Footer } from "@/features/ui/Footer";
import { Header } from "@/features/ui/Header";
import Head from "next/head";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import styles from "./styles.module.css";

type LayoutProps = {
  children: ReactElement;
  headerProps: ComponentPropsWithoutRef<"header">;
};

export const createGetLayout = (
  title: string
): ((page: ReactElement) => ReactNode) => {
  return function getLayout(page: ReactElement) {
    return <Layout headerProps={{ children: title }}>{page}</Layout>;
  };
};

export const Layout = ({ children, headerProps }: LayoutProps) => {
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
      <Footer />
    </div>
  );
};
