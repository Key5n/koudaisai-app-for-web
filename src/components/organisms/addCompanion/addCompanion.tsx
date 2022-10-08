import styles from "styles/components.module.css";
import { KofunmanAndTamago } from "components/molecules/KofunmanAndTamago";
import { Subtitle } from "components/atoms/subtitle";
import { Text } from "components/atoms/text";
import { Button } from "components/atoms/button";

export const AddCompanion: React.FC = () => {
  return (
    <div className={styles.addCompanion}>
      <KofunmanAndTamago />
      <Subtitle text="同行者を追加する" />
      <p className={styles.addCompanionText}>
        代表者様に同行する方の予約を
        <br />
        2人まですることができます
      </p>
      <Button To="" text="追加する" />
    </div>
  );
};

