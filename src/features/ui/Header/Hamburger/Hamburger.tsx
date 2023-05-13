import { useAppDispatch } from "@/lib/reduxHooks";
import styles from "./styles.module.css";
import { toggleIsNavigatonOpen } from "@/features/ui/NavigationLinks/NavigationSlice";
export const Hamburger = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={styles.module}
      onClick={() => dispatch(toggleIsNavigatonOpen())}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
};
