import { FC } from "react";
import { useState } from "react";
import Router from "next/router";
import styles from "styles/components.module.css";
import { KofunmanTalking } from "components/molecules/kofunmanTalking";
import { Authentication } from "components/organisms/authentication";
import { Header } from "components/organisms/header";
import { TermsOfServiceText } from "components/atoms/termsOfServiceText";
import { Agreement } from "components/molecules/agreement";
import { ModalWindow } from "components/organisms/modalWindow";

export const SignupTemplate: FC = () => {
  const [isSignup, setIsSignup] = useState<boolean>(true);
  const onClick = (): void => {
    window.scroll({ top: 0, left: 0, behavior: "auto" });
    setIsSignup(!isSignup);
  };
  return (
    <>
      <Header
        displayBack={true}
        onClick={() => {
          if (isSignup) {
            Router.back();
          } else {
            onClick();
          }
        }}
        title="予約"
      />
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
      {!isSignup && (
        <>
          <Agreement />
          <ModalWindow />
        </>
      )}
    </>
  );
};
