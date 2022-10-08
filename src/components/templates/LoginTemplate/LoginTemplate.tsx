import { FC } from "react";
import { Header } from "components/organisms/header";
import { Footer } from "components/organisms/footer";
import { Authentication } from "components/organisms/authentication";

export const LoginTemplate: FC = () => {
  return (
    <>
      <Header displayBack={true} onClick={() => {}} />
      <Authentication onClick={() => {}} />
      <Footer />
    </>
  );
};
