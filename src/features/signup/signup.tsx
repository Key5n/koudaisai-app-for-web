import styles from "./styles.module.css";
import clsx from "clsx";
import { KofunmanTalking } from "../ui/KofunmanTalking";

export const Signup = () => {
  return (
    <main className={styles.module}>
      <KofunmanTalking line={{ children: "予約のために次のことを教えてね" }} />
    </main>
  );
};
