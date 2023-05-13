import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import styles from "./styles.module.css";
import { closeModal } from "./modalWindowSlice";
import clsx from "clsx";

type Props = {
  onOK: () => void;
};

export const ModalWindow = ({ onOK }: Props) => {
  const dispatch = useAppDispatch();
  const { isModalWindowOpen, title, description } = useAppSelector(
    (state) => state.modalWindow
  );
  return (
    <div
      className={clsx(styles.modalOverlay, !isModalWindowOpen && styles.hidden)}
      onClick={() => {
        dispatch(closeModal());
      }}
    >
      <div
        className={styles.modalWindow}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={styles.modalHead}>
          <div className={styles.modalTitle}>{title}</div>
          <div>{description}</div>
        </div>
        <div className={styles.modalButtonContainer}>
          <button
            className={styles.modalButton}
            onClick={() => {
              dispatch(closeModal());
            }}
          >
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
