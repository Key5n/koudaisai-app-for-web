import Link from "next/link";
import styles from "./styles.module.css";
import { Button } from "components/atoms/Button";

type Props = {
  hideModal: () => void;
};

export const ModalWindow = ({ hideModal }: Props) => {
  return (
    <div>
      <Button className={styles.modalOverlay} onClick={hideModal}></Button>
      <div className={styles.modalWindow}>
        <p className={styles.modalHead}>
          <span className={styles.modalTitle}>参加の条件</span>
          <br />
          参加の条件に同意します
        </p>
        <div className={styles.modalButtonContainer}>
          <Button className={styles.modalButton} onClick={hideModal}>
            キャンセル
          </Button>
          <Button className={styles.modalButton}>同意する</Button>
        </div>
      </div>
    </div>
  );
};
