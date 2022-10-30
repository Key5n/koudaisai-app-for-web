import { FC } from "react";
import { useState } from "react";
import Router from "next/router";
import styles from "./styles.module.css";
import { KofunmanTalking } from "components/atoms/kofunmanTalking";
import { Authentication } from "components/organisms/authentication";
import { Header } from "components/organisms/header";
import { ModalWindow } from "components/organisms/modalWindow";
import { AnchorButton } from "components/atoms/AnchorButton";

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
          </>
        )}
      </main>
      {!isSignup && (
        <>
          <div className={styles.agreement}>
            <AnchorButton href={"/"} className={styles.AgreementButton}>
              同意しない
            </AnchorButton>
            <AnchorButton
              href={"#modal-agreement"}
              className={styles.AgreementButton}
            >
              同意する
            </AnchorButton>
          </div>
          <ModalWindow />
        </>
      )}
    </>
  );
};
