import { DonutChart } from "../DonutChart";
import { MysteryForm } from "components/molecules/MysteryForm";
import { useState } from "react";
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

export const MysteryObj = ({ data }: Props) => {
  const [mysteryData, setMysteryData] = useState<mysteryData>({
    numOfChallenger: data.numOfChallenger,
    numOfSolver: data.numOfSolver,
    numOfNewChallenger: 0,
    numOfNewSolver: 0,
  });

  return (
    <div className={styles.module}>
      <DonutChart
        value={[
          mysteryData.numOfSolver,
          mysteryData.numOfChallenger - mysteryData.numOfSolver,
        ]}
      />
      <MysteryForm mysteryData={mysteryData} setMysteryData={setMysteryData} />
    </div>
  );
};
