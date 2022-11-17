import styles from "./styles.module.css";
import { Button } from "components/atoms/Button";

type Props = {
  hideModal: () => void;
  title: string;
  text: string;
  onOK: () => void;
};

export const ModalWindow = ({ hideModal, title, text, onOK }: Props) => {
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
          <Button className={styles.modalButton} onClick={onOK}>OK</Button>
        </div>
      </div>
    </div>
  );
};
