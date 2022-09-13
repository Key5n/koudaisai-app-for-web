import { FC } from "react";
import styles from "styles/components.module.css";
import KofunmanTalking from "components/molecules/kofunmanTalking";
import SignupButton from "components/atoms/signupButton";
import LoginButton from "components/atoms/loginButton";

const Home: FC = () => {
  return (
    <div className={styles.index}>
      <KofunmanTalking />
      <SignupButton />
      <LoginButton />
    </div>
  );
};

export default Home;
