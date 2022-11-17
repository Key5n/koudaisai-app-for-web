import { Header } from "components/organisms/header";
import { LoginForm } from "components/organisms/LoginForm";
import styles from "./styles.module.css";
import { KofunmanTalking } from "components/atoms/KofunmanTalking";

export const LoginTemplate = () => {
  return (
    <>
      <Header title="ログイン" />
      <main className={styles.module}>
        <KofunmanTalking line={{ children: "ログインするよ" }} />
        <LoginForm />
      </main>
    </>
  );
};
