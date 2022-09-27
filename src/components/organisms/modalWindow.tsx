import { FC } from "react";
import Link from "next/link";
import styles from "styles/components.module.css";

const ModalWindow: FC = () => {
  return (
    <div className={styles.modalContainer} id="modal-agreement">
      <a className={styles.modalOverlay} href="#!"></a>
      <div className={styles.modalWindow}>
        <p className={styles.modalHead}>
          <span className={styles.modalTitle}>参加の条件</span>
          <br />
          参加の条件に同意します
        </p>
        <div className={styles.modalButtonContainer}>
          <a className={styles.modalButton} href="#!">
            キャンセル
          </a>
          <Link href="/">
            <a className={styles.modalButton}>同意する</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
