import { FC, ReactNode } from "react";
import { useState } from "react";
import styles from "styles/components.module.css";
import KofunmanTalking from "components/molecules/kofunmanTalking";
import SignupButton from "components/atoms/signupButton";
import Login from "components/molecules/login";
import Header from "components/organisms/header";
import Footer from "components/organisms/footer";
import UserObjectWrapper from "components/organisms/userObjectWrapper";

const Template: FC = ({ children }: { children?: ReactNode }) => {
  const [hasLogin, setHasLogin] = useState<boolean>(false);
  return (
    <>
      <Header displayBack={false} onClick={() => {}} />
      <main>
        {hasLogin ? (
          <div className={styles.main}>
            <UserObjectWrapper />
            <button
              onClick={() => {
                setHasLogin(!hasLogin);
              }}
            >
              ボタン
            </button>
          </div>
        ) : (
          <div className={styles.index}>
            <KofunmanTalking />
            <SignupButton />
            <Login />
            <button
              onClick={() => {
                setHasLogin(!hasLogin);
              }}
            >
              ボタン
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Template;
