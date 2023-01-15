import styles from "./styles.module.css";
import clsx from "clsx";
import { KofunmanTalking } from "../ui/KofunmanTalking";
import { SignupForm } from "./signup-form";
import { Agreement } from "./agreement";

export const Signup = () => {
  return (
    <main className={styles.module}>
      <KofunmanTalking line={{ children: "予約のために次のことを教えてね" }} />
      <SignupForm />
    </main>
  );
};
