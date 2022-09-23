import { FC } from "react";
import styles from "styles/components.module.css";
import KofunmanTalking from "components/molecules/kofunmanTalking";
import Authentication from "components/organisms/authentication";

const Signup: FC = () => {
  return (
    <main className={styles.centered}>
      <KofunmanTalking />
      <Authentication />
    </main>
  );
};

export default Signup;
