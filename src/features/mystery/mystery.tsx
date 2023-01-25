import { useState } from "react";
import { DoughnutChart } from "./doughnutChart";
import { Field } from "./Field";
import styles from "./styles.module.css";

type Props = {
  data: { numOfChallenger: number; numOfSolver: number };
};

type mysteryData = {
  numOfChallenger: number;
  numOfSolver: number;
  numOfNewChallenger: number;
  numOfNewSolver: number;
};

export const Mystery = ({ data }: Props) => {
  const [mysteryData, setMysteryData] = useState<mysteryData>({
    numOfChallenger: data.numOfChallenger,
    numOfSolver: data.numOfSolver,
    numOfNewChallenger: 0,
    numOfNewSolver: 0,
  });

  return (
    <main className={styles.module}>
      <DoughnutChart
        value={[
          mysteryData.numOfSolver,
          mysteryData.numOfChallenger - mysteryData.numOfSolver,
        ]}
      />
      <div className={styles.data}>
        <Field title="挑戦人数" value={mysteryData.numOfChallenger} />
        <Field title="完全クリア人数" value={mysteryData.numOfSolver} />
      </div>
      {/* <MysteryForm mysteryData={mysteryData} setMysteryData={setMysteryData} /> */}
    </main>
  );
};
