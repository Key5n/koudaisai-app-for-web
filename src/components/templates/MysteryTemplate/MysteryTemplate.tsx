import styles from "./styles.module.css";
import { MysteryObj } from "components/organisms/Mystery";
import { Header } from "components/organisms/header";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";

type Props = {
  data: { numOfChallenger: number; numOfSolver: number };
};

export const MysteryTemplate = ({ data }: Props) => {
  console.log(data);
  return (
    <>
      <Header
        displayBack={false}
        onClick={() => {}}
        title={`謎解き管理者画面`}
      />
      <section className={styles.module}>
        <MysteryObj data={data} />
      </section>
    </>
  );
};
