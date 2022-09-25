import { FC } from "react";
import styles from "styles/components.module.css";
import InputItem from "components/molecules/inputItem";
import Header from "components/organisms/header";
import Footer from "components/organisms/footer";
import Authentication from "components/organisms/authentication";

const LoginTemplate: FC = () => {
  return (
    <>
      <Header />
      <Authentication />
      <Footer />
    </>
  );
};

export default LoginTemplate;
