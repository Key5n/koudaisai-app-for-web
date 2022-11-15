import clsx from "clsx";
import styles from "./styles.module.css";

export const TriathlonTemplate = () => {
  return (
    <div className={styles.module}>
      <div className={styles.title}>
        MEIKOU TRIATHLON
        <br />
        RANKING
      </div>
      <div className={styles.content}>
        <div className={clsx(styles.captions, styles.row)}>
          <span className={styles.rank}>RANK</span>
          <span className={styles.name}>USER</span>
          <span className={styles.score}>SCORE</span>
        </div>
        <User rank={1} name="落単古墳マン" score={300} />
        <User rank={2} name="2号館たまごちゃん" score={300} />
        <User rank={3} name="ハニワ君" score={0} />
        <User rank={4} name="プレイヤー4" score={0} />
        <User rank={5} name="プレイヤー5" score={0} />
      </div>
    </div>
  );
};

type Props = {
  rank: number;
  name: string;
  score: number;
};

const User = ({ rank, name, score }: Props) => {
  return (
    <div className={clsx(styles.user, styles.row)}>
      <span className={styles.rank}>{rank}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.score}>{score}</span>
    </div>
  );
};
