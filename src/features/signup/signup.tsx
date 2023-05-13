import styles from "./styles.module.css";
import clsx from "clsx";
import { KofunmanTalking } from "../ui/KofunmanTalking";
import { SignupForm } from "./signup-form";

export const Signup = () => {
  return (
    <main className={styles.module}>
      <KofunmanTalking
        line={{ children: "予約のために次のことを教えてね" }}
        mode={0}
      />
      <SignupForm />
    </main>
  );
};
