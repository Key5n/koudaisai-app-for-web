import styles from "./styles.module.css";
import { MysteryObj } from "components/organisms/Mystery";
import { Header } from "components/organisms/header";

type Props = {
  data: { numOfChallenger: number; numOfSolver: number };
};

export const MysteryTemplate = ({ data }: Props) => {
  return (
    <>
      <Header title={`謎解き管理者画面`} />
      <section className={styles.module}>
        <MysteryObj data={data} />
      </section>
    </>
  );
};
