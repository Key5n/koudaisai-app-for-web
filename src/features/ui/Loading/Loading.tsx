import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import styles from "./styles.module.css";

export const Loading = () => {
  const { isLoading } = useAppSelector((state) => state.isLoading);
  return (
    <>
      {isLoading && (
        <div className={styles.overlay}>
          <div className={styles.ldsSpinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};
