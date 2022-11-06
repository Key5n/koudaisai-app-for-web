import { useState } from "react";
import styles from "./styles.module.css";
import { Header } from "components/organisms/header";
import { Footer } from "components/organisms/footer";
import { UserObjectWrapper } from "components/organisms/userObjectWrapper/userObjectWrapper";
import { useUser } from "context/userContext";
import Link from "next/link";
import { KofunmanTalking } from "components/atoms/KofunmanTalking";
import { AnchorButton } from "components/atoms/AnchorButton";
import Image from "next/image";

export const IndexTemplate = () => {
  const { user } = useUser();
  return (
    <>
      <Header title="第60回工大祭" />
      <main className={styles.module}>
        {user?.uid ? (
          <div className={styles.loggedIn}>
            <div className={styles.kofunman}>
              <Image
                src="/images/kofunman_witiout_arms.png"
                alt="kofunman"
                width="210px"
                height="469px"
                priority={true}
              />
            </div>
            <UserObjectWrapper user1={user} />
          </div>
        ) : (
          <div className={styles.noLogIn}>
            <KofunmanTalking
              line={{ children: "僕は古墳マン。\n工大祭の案内をするよ！" }}
            />
            <Link href="/admin/signup">
              <AnchorButton className={styles.signup}>新規予約</AnchorButton>
            </Link>
            <div className={styles.login}>
              すでに工大祭に予約された場合
              <Link href="/admin/login">
                <AnchorButton className={styles.loginButton}>
                  ログイン
                </AnchorButton>
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};
