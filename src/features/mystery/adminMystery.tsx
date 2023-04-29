import { useState } from "react";
import { DoughnutChart } from "./doughnutChart";
import { Field } from "./Field";
import styles from "./styles.module.css";
import { MysteryForm } from "./mysteryForm";

type Props = {
  data: { numOfChallenger: number; numOfSolver: number };
};

type mysteryData = {
  numOfChallenger: number;
  numOfSolver: number;
  numOfNewChallenger: number;
  numOfNewSolver: number;
};

export const AdminMystery = ({ data }: Props) => {
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
      <MysteryForm mysteryData={mysteryData} setMysteryData={setMysteryData} />
    </main>
  );
};
