import { DonutChart } from "components/organisms/DonutChart";
import { Field } from "components/atoms/Field";
import styles from "./styles.module.css";

type Props = {
  numOfChallenger: number;
  numOfSolver: number;
};

export const MysteryTemplate = ({ numOfChallenger, numOfSolver }: Props) => {
  return (
    <div className={styles.module}>
      <DonutChart value={[numOfSolver, numOfChallenger - numOfSolver]} />
      <div className={styles.data}>
        <Field title={"挑戦人数"} value={numOfChallenger} />
        <Field title={"完全クリア人数"} value={numOfSolver} />
      </div>
    </div>
  );
};
