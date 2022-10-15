import styles from "./styles.module.css";
import { Field } from "../../atoms/Field";
import { InputWithTitle } from "../InputWithTitle";
import { Button } from "components/atoms/Button";
import React, { FormEventHandler, useState } from "react";

type mysteryObj = {
  numOfChallenger: number;
  numOfSolvedPeople: number;
  numOfNewChallenger: number | null;
  numOfNewSolvedPeople: number | null;
};

export const MysteryForm = () => {
  const [mysteryObj, setMysteryObj] = useState<mysteryObj>({
    numOfChallenger: 0,
    numOfSolvedPeople: 0,
    numOfNewChallenger: 0,
    numOfNewSolvedPeople: 0,
  });

  const onClickButtonIncreasesNewSolvedPeoplebyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryObj((prev) => ({
      ...prev,
      numOfNewSolvedPeople: (prev.numOfNewSolvedPeople ?? 0) + 1,
    }));
  };

  const onClickButtonDecreasesNewSolvedPeoplebyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryObj((prev) => ({
      ...prev,
      numOfNewSolvedPeople: (prev.numOfNewSolvedPeople ?? 0) - 1,
    }));
  };

  const onClickButtonIncreasesNewChallengerbyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryObj((prev) => ({
      ...prev,
      numOfNewChallenger: prev.numOfNewChallenger++,
    }));
  };

  const onClickButtonDecreasesNewChallengerbyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryObj((prev) => ({
      ...prev,
      numOfNewChallenger: prev.numOfNewChallenger--,
    }));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setMysteryObj({
      numOfChallenger:
        mysteryObj.numOfChallenger + mysteryObj.numOfNewChallenger,
      numOfSolvedPeople:
        mysteryObj.numOfSolvedPeople + mysteryObj.numOfNewSolvedPeople,
      numOfNewChallenger: 0,
      numOfNewSolvedPeople: 0,
    });
  };

  const handleNewChallengerInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let input: string = e.target.value;
    input = input.replace(/[^0-9]/g, "");
    setMysteryObj((prev) => ({
      ...prev,
      numOfNewChallenger: +input,
    }));
  };

  const handleNewSolvedpeopleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let input: string = e.target.value;
    input = input.replace(/[^0-9]/g, "");
    setMysteryObj((prev) => ({
      ...prev,
      numOfNewSolvedPeople: +input,
    }));
  };

  return (
    <>
      <form className={styles.module} onSubmit={onSubmit}>
        <Field title={"挑戦人数"} value={mysteryObj.numOfChallenger} />
        <Field title={"完全クリア人数"} value={mysteryObj.numOfSolvedPeople} />
        <InputWithTitle
          title={`新たな\n挑戦人数`}
          value={mysteryObj.numOfNewChallenger}
          onMinusClick={onClickButtonDecreasesNewChallengerbyOne}
          onPlusClick={onClickButtonIncreasesNewChallengerbyOne}
          handleInputChange={handleNewChallengerInputChange}
        />
        <InputWithTitle
          title={`新たな\n完全クリア人数`}
          value={mysteryObj.numOfNewSolvedPeople}
          onMinusClick={onClickButtonDecreasesNewSolvedPeoplebyOne}
          onPlusClick={onClickButtonIncreasesNewSolvedPeoplebyOne}
          handleInputChange={handleNewSolvedpeopleInputChange}
        />
        <Button type="submit">決定</Button>
      </form>
    </>
  );
};
