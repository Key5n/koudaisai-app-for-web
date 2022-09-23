import { FC, ReactNode } from "react";
import styles from "styles/components.module.css";
import KofunmanTalking from "components/molecules/kofunmanTalking";
import SignupButton from "components/atoms/signupButton";
import LoginButton from "components/atoms/loginButton";
import Footer from "components/organisms/footer";

const Template: FC = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <main>
        <div className={styles.index}>
          <KofunmanTalking />
          <SignupButton />
          <LoginButton />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Template;
