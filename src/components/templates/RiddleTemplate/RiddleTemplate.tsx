import styles from "./styles.module.css";
import { HeadAndField } from "components/molecules/headAndField";
import { TextboxWithTitle } from "components/molecules/TextBoxWithTitle";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Button } from "components/atoms/Button";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["完全クリア人数", "クリア失敗数"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 107, 107, 1)", "rgba(160, 160, 160, 1)"],
      borderWidth: 1,
      offset: 5,
      // spacing: 10,
      borderRadius: 5,
    },
  ],
};

const options = {
  cutout: "75%",
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const RiddleTemplate: React.FC = () => {
  return (
    <section className={styles.module}>
      <div className={styles.title}>
        謎解き
        <br />
        完全クリア率
      </div>
      <div className={styles.content}>
        <div className={styles.percent}>
          50%
          <div className={styles.amount}>100/200</div>
        </div>
        <Doughnut data={data} options={options} />
      </div>
      <div className={styles.propertyWrapper}>
        <HeadAndField property={"挑戦人数"} value={"30人"} />
        <HeadAndField property={"完全クリア人数"} value={"30人"} />
        <TextboxWithTitle text={`新たな\n挑戦人数`} />
        <TextboxWithTitle text={`新たな\n完全クリア人数`} />
        <Button onClick={() => {}}>決定</Button>
      </div>
    </section>
  );
};
