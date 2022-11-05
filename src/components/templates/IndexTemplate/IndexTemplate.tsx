import { useState } from "react";
import styles from "./styles.module.css";
import { Header } from "components/organisms/header";
import { Footer } from "components/organisms/footer";
import { UserObjectWrapper } from "components/organisms/userObjectWrapper/userObjectWrapper";
import { useUser } from "context/userContext";

export const IndexTemplate = () => {
  const { user } = useUser();
  return (
    <>
      <Header title="第60回工大祭" />
      <main className={styles.module}>
        {user?.uid ? <UserObjectWrapper user1={user} /> : <div>未ログイン</div>}
      </main>
      <Footer />
    </>
  );
};
