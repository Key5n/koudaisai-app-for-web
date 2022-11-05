import styles from "styles/components.module.css";
import Link from "next/link";
import { AnchorButton } from "components/atoms/AnchorButton";

export const AddCompanion: React.FC = () => {
  return (
    <div className={styles.addCompanion}>
      <p className={styles.addCompanionText}>
        代表者様に同行する方の予約を
        <br />
        2人まですることができます
      </p>
      <Link href={"/signup"}>
        <AnchorButton>追加する</AnchorButton>
      </Link>
    </div>
  );
};
