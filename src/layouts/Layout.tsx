import { Footer } from "@features/ui/Footer";
import { Header } from "@features/ui/Header";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";

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
    <>
      <Header {...headerProps} />
      <p>レイアウト</p>
      <div>{children}</div>
      <Footer />
    </>
  );
};
