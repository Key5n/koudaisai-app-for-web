import styles from "./styles.module.css";
import { KofunmanTalking } from "components/atoms/KofunmanTalking";
import { Header } from "components/organisms/header";
import { SignupForm } from "components/organisms/SignupForm";

type Props = {
  toggleState: () => void;
};

export const SignupTemplate = ({ toggleState }: Props) => {
  return (
    <>
      <Header title="新規予約" />
      <main className={styles.module}>
        <>
          <KofunmanTalking
            line={{ children: "予約のために次のことを教えてね" }}
          />
          <SignupForm toggleState={toggleState} />
        </>
      </main>
    </>
  );
};
