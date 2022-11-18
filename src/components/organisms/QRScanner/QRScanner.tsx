import styles from "./styles.module.css";
import { Video } from "components/atoms/Video";
import { ManageAdmission } from "../ManageAdmission";
import { ModalWindow } from "../modalWindow";
import { useEntry } from "components/hooks/useEntry";
import clsx from "clsx";
import { firstDate } from "lib/dateManagement";

export const QRScanner = () => {
  const {
    isCameraOpen,
    isLoading,
    setVideoRef,
    canvasRef,
    users,
    toggleCameraOpen,
    MakeAllEnter,
    status,
    ModalConfig: { title, text, isOpen },
    setModalConfig,
  } = useEntry();
  return (
    <>
      {isOpen && (
        <ModalWindow
          hideModal={() =>
            setModalConfig({ title: title, text: text, isOpen: false })
          }
          title={title}
          text={text}
          onOK={MakeAllEnter}
        />
      )}
      <div className={styles.module}>
        <button
          className={clsx(styles.rightUpperIcon)}
          onClick={toggleCameraOpen}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4998 11.667C14.3382 11.667 11.6665 14.3387 11.6665 17.5003C11.6665 20.662 14.3382 23.3337 17.4998 23.3337C20.6615 23.3337 23.3332 20.662 23.3332 17.5003C23.3332 14.3387 20.6615 11.667 17.4998 11.667ZM17.4998 20.417C15.9467 20.417 14.5832 19.0535 14.5832 17.5003C14.5832 15.9472 15.9467 14.5837 17.4998 14.5837C19.053 14.5837 20.4165 15.9472 20.4165 17.5003C20.4165 19.0535 19.053 20.417 17.4998 20.417Z"
              fill="#FF9A62"
            />
            <path
              d="M29.1665 7.29199H25.3952L21.4475 3.34429C21.3123 3.2086 21.1516 3.10099 20.9747 3.02766C20.7977 2.95433 20.608 2.91672 20.4165 2.91699H14.5832C14.3916 2.91672 14.2019 2.95433 14.025 3.02766C13.848 3.10099 13.6873 3.2086 13.5521 3.34429L9.60442 7.29199H5.83317C4.22463 7.29199 2.9165 8.60012 2.9165 10.2087V26.2503C2.9165 27.8589 4.22463 29.167 5.83317 29.167H29.1665C30.775 29.167 32.0832 27.8589 32.0832 26.2503V10.2087C32.0832 8.60012 30.775 7.29199 29.1665 7.29199ZM5.83317 26.2503V10.2087H10.2082C10.5961 10.2087 10.9665 10.0555 11.2392 9.78137L15.1869 5.83366H19.8127L23.7605 9.78137C23.8957 9.91706 24.0563 10.0247 24.2333 10.098C24.4102 10.1713 24.6 10.2089 24.7915 10.2087H29.1665L29.1694 26.2503H5.83317Z"
              fill="#FF9A62"
            />
            {isCameraOpen && (
              <line
                x1="2.70711"
                y1="1.29289"
                x2="33.4663"
                y2="32.052"
                stroke="#FFA800"
                strokeWidth="2"
              />
            )}
          </svg>
        </button>
        {isCameraOpen && (
          <Video
            autoPlay
            playsInline={true}
            ref={setVideoRef}
            className={styles.video}
          >
            <canvas ref={canvasRef} />
          </Video>
        )}
        <div className={styles.annotation}>読み込んだ数: {users.length}</div>
        <div className={styles.annotation}>first date: {firstDate}</div>
        <ManageAdmission
          users={users}
          isLoading={isLoading}
          setModalConfig={setModalConfig}
          status={status}
        />
      </div>
    </>
  );
};
