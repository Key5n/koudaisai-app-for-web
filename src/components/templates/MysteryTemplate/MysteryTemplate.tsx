import styles from "./styles.module.css";
import { Mystery } from "components/organisms/Mystery";
import { Header } from "components/organisms/header";

export const MysteryTemplate = () => {
  return (
    <>
      <Header
        displayBack={false}
        onClick={() => {}}
        title={`謎解き管理者画面`}
      />
      <section className={styles.module}>
        <Mystery />
      </section>
    </>
  );
};
