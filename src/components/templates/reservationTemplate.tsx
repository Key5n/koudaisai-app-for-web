import { FC, ReactNode } from "react";
import styles from "styles/components.module.css";
import KofunmanTalking from "components/molecules/kofunmanTalking";
import SignupButton from "components/atoms/signupButton";
import Login from "components/molecules/login";
import Header from "components/organisms/header";
import Footer from "components/organisms/footer";

const Template: FC = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.index}>
          <KofunmanTalking />
          <SignupButton />
          <Login />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Template;
