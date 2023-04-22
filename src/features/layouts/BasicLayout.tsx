import { Header } from "@/features/ui/Header";
import Head from "next/head";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import styles from "./styles.module.css";
import { NavigationLinks } from "../ui/NavigationLinks";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

type LayoutProps = {
  children: ReactElement;
  headerProps: ComponentPropsWithoutRef<"header">;
};

export const createGetLayoutWithFooter = ({
  title,
}: {
  title: string;
}): ((page: ReactElement) => ReactNode) => {
  return function getLayoutWithFooter(page: ReactElement) {
    return <BasicLayout headerProps={{ children: title }}>{page}</BasicLayout>;
  };
};

export const BasicLayout = ({ children, headerProps }: LayoutProps) => {
  return (
    <Provider store={store}>
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
        <div className={styles.layout}>
          <aside>
            <NavigationLinks />
          </aside>
          {children}
        </div>
      </div>
    </Provider>
  );
};
