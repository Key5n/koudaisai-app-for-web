import { useAppDispatch } from "@/lib/reduxHooks";
import styles from "./styles.module.css";
import { toggle } from "@/features/layouts/NavigationSlice";
export const Hamburger = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.module} onClick={() => dispatch(toggle())}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
};
