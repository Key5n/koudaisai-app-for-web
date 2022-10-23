import { DonutChart } from "components/organisms/DonutChart";
import { useState } from "react";
import { Field } from "components/atoms/Field";
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

export const MysteryTemplate = ({ data }: Props) => {
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
      <div className={styles.data}>
        <Field title={"挑戦人数"} value={mysteryData.numOfChallenger} />
        <Field title={"完全クリア人数"} value={mysteryData.numOfSolver} />
      </div>
    </div>
  );
};
