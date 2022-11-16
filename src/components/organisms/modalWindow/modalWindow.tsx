import styles from "./styles.module.css";
import { Button } from "components/atoms/Button";

type Props = {
  hideModal: () => void;
  title: string;
  text: string;
};

export const ModalWindow = ({ hideModal, title, text }: Props) => {
  return (
    <div>
      <Button className={styles.modalOverlay} onClick={hideModal}></Button>
      <div className={styles.modalWindow}>
        <p className={styles.modalHead}>
          <span className={styles.modalTitle}>{title}</span>
          <br />
          {text}
        </p>
        <div className={styles.modalButtonContainer}>
          <Button className={styles.modalButton} onClick={hideModal}>
            キャンセル
          </Button>
          <Button className={styles.modalButton}>OK</Button>
        </div>
      </div>
    </div>
  );
};
