import { FC } from "react";
import { useState } from "react";
import styles from "styles/components.module.css";
import KofunmanTalking from "components/molecules/kofunmanTalking";
import Authentication from "components/organisms/authentication";
import Header from "components/organisms/header";
import Footer from "components/organisms/footer";
import TermsOfServiceText from "components/atoms/termsOfServiceText";
import Agreement from "components/molecules/agreement";

const SignupTemplate: FC = () => {
  const [isSignup, setIsSignup] = useState<boolean>(true);
  const onClick = (): void => {
    setIsSignup(!isSignup);
  };
  return (
    <>
      <Header />
      <main className={styles.signupTemplate}>
        {isSignup ? (
          <>
            <KofunmanTalking />
            <Authentication onClick={onClick} />
          </>
        ) : (
          <>
            <KofunmanTalking />
            <TermsOfServiceText />
          </>
        )}
      </main>
      {!isSignup && <Agreement />}
    </>
  );
};

export default SignupTemplate;
