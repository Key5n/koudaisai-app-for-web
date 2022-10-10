import { FC } from "react";
import styles from "styles/components.module.css";
import { NextPage } from "next";
import { SignupTemplate } from "components/templates/SignupTemplate";

const Signup: NextPage = () => {
  return (
    <>
      <SignupTemplate />
    </>
  );
};

export default Signup;
