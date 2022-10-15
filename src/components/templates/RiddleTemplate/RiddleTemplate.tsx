import styles from "./styles.module.css";
import { DonutChart } from "components/organisms/DonutChart";
import { MysteryForm } from "components/molecules/MysteryForm";

export const RiddleTemplate: React.FC = () => {
  return (
    <section className={styles.module}>
      <DonutChart />
      <MysteryForm />
    </section>
  );
};
