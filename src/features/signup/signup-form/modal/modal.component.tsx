import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  onOK: () => void;
  hideModal: () => void;
};

export const Modal = ({ hideModal, onOK }: Props) => {
  return (
    <div>
      <div className={styles.modalOverlay} onClick={hideModal}></div>
      <div className={styles.modalWindow}>
        <p className={styles.modalHead}>
          <span className={styles.modalTitle}>参加の条件</span>
          <br />
          参加の条件に同意します
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
