import { FC } from "react";
import styles from "styles/reservation.module.css";
import KofunmanTalking from "components/molecules/kofunmanTalking";
import Authentication from "components/organisms/authentication";

const Signup: FC = () => {
  return (
    <main>
      <KofunmanTalking />
      <Authentication />
    </main>
  );
};

export default Signup;
