import { FC, ReactNode } from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "styles/components.module.css";
import { KofunmanTalking } from "components/atoms/kofunmanTalking";
import { SignupButton } from "components/atoms/signupButton";
import { Login } from "components/molecules/login";
import { Header } from "components/organisms/header";
import { Footer } from "components/organisms/footer";
import { UserObjectWrapper } from "components/organisms/userObjectWrapper/userObjectWrapper";

export const ReservationTemplate: FC = () => {
  const [hasLogin, setHasLogin] = useState<boolean>(false);
  return (
    <>
      <Header displayBack={false} onClick={() => {}} title="第60回工大祭" />
      <main>
        {hasLogin ? (
          <div className={styles.main}>
            <UserObjectWrapper />
          </div>
        ) : (
          <div className={styles.index}>
            <KofunmanTalking />
            <SignupButton />
            <Login />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};
