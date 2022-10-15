import styles from "./styles.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  value: [number, number];
};

export const DonutChart = ({ value }: Props) => {
  const data = {
    labels: ["完全クリア人数", "クリア失敗数"],
    datasets: [
      {
        data: value,
        backgroundColor: ["rgba(255, 107, 107, 1)", "rgba(160, 160, 160, 1)"],
        borderWidth: 1,
        offset: 5,
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
  return (
    <div className={styles.module}>
      <div className={styles.title}>
        謎解き
        <br />
        完全クリア率
      </div>
      <div className={styles.content}>
        <div className={styles.percent}>
          {(value[0] / (value[0] + value[1])).toFixed(2)}%
          <div className={styles.amount}>100/200</div>
        </div>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};
