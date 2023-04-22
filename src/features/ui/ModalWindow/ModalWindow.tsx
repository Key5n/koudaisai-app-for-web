import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  onOK: () => void;
  hideModal: () => void;
  title: string;
  text: string;
};

export const Modal = ({ hideModal, onOK, title, text }: Props) => {
  return (
    <div>
      <div className={styles.modalOverlay} onClick={hideModal}></div>
      <div className={styles.modalWindow}>
        <p className={styles.modalHead}>
          <span className={styles.modalTitle}>{title}</span>
          <br />
          {text}
        </p>
        <div className={styles.modalButtonContainer}>
          <button className={styles.modalButton} onClick={hideModal}>
            キャンセル
          </button>
          <button className={styles.modalButton} onClick={onOK}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
