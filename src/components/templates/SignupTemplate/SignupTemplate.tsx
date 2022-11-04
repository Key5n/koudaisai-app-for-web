import styles from "./styles.module.css";
import { KofunmanTalking } from "components/atoms/KofunmanTalking";
import { Header } from "components/organisms/header";
import { AnchorButton } from "components/atoms/AnchorButton";
import { InputWithTitle } from "components/molecules/InputWithTitle/InputWithTitle";
import { Checkbox } from "components/molecules/checkbox";
import { SignupForm } from "components/organisms/SignupForm";
import { Button } from "components/atoms/Button";

type Props = {
  toggleState: () => void;
};

export const SignupTemplate = ({ toggleState }: Props) => {
  return (
    <>
      <Header title="新規予約" />
      <main className={styles.module}>
        <>
          <KofunmanTalking line="予約のために次のことを教えてね" />
          <SignupForm toggleState={toggleState} />
        </>
      </main>
    </>
  );
};
