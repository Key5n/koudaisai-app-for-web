import { NextPage } from "next";
import { SignupTemplate } from "components/templates/SignupTemplate";
import { AgreementTemplate } from "components/templates/AgreementTemplate";
import { useState } from "react";

const Signup: NextPage = () => {
  const [isInputAlright, setIsInputAlright] = useState<boolean>(false);
  const onClick = (): void => {
    setIsInputAlright(!isInputAlright);
  };
  return (
    <>
      {isInputAlright ? (
        <AgreementTemplate toggleState={onClick} />
      ) : (
        <SignupTemplate toggleState={onClick} />
      )}
    </>
  );
};

export default Signup;
