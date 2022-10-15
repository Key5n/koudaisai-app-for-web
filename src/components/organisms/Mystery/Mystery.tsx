import { DonutChart } from "../DonutChart";
import { MysteryForm } from "components/molecules/MysteryForm";
import { useState } from "react";
import styles from "./styles.module.css";

type mysteryObj = {
  numOfChallenger: number;
  numOfSolvedPeople: number;
  numOfNewChallenger: number;
  numOfNewSolvedPeople: number;
};

export const Mystery = () => {
  const [mysteryObj, setMysteryObj] = useState<mysteryObj>({
    numOfChallenger: 1,
    numOfSolvedPeople: 0,
    numOfNewChallenger: 0,
    numOfNewSolvedPeople: 0,
  });
  return (
    <div className={styles.module}>
      <DonutChart
        value={[
          mysteryObj.numOfSolvedPeople,
          mysteryObj.numOfChallenger - mysteryObj.numOfSolvedPeople,
        ]}
      />
      <MysteryForm mysteryObj={mysteryObj} setMysteryObj={setMysteryObj} />
    </div>
  );
};
