import { FC } from "react";
import Kofunman from "components/atoms/kofunman";
import Line from "components/atoms/line";
import styles from "styles/reservation.module.css";

const KofunmanTalking: FC<{ line?: string }> = ({
  line,
}: {
  line?: string;
}) => {
  return (
    <div className={styles.kofunman}>
      <Kofunman />
      <Line line={line} />
    </div>
  );
};

export default KofunmanTalking;
