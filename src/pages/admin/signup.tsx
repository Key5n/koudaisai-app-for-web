import { NextPage } from "next";
import { SignupTemplate } from "components/templates/SignupTemplate";
import { AgreementTemplate } from "components/templates/AgreementTemplate";
import { useState } from "react";

const Signup: NextPage = () => {
  const [isInputAlright, setIsInputAlright] = useState<boolean>(false);
  const toggleState = (): void => {
    setIsInputAlright(!isInputAlright);
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      {isInputAlright ? (
        <AgreementTemplate toggleState={toggleState} />
      ) : (
        <SignupTemplate toggleState={toggleState} />
      )}
    </>
  );
};

export default Signup;
