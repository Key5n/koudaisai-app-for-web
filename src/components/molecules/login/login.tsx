import { FC } from "react";
import styles from "styles/components.module.css";
import { LoginButton } from "components/atoms/loginButton";

export const Login: FC = () => {
  return (
    <div className={styles.login}>
      <p>すでに工大祭に予約された場合</p>
      <LoginButton />
    </div>
  );
};
