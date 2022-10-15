import styles from "./styles.module.css";
import { Field } from "../../atoms/Field";
import { InputWithTitle } from "../InputWithTitle";
import { Button } from "components/atoms/Button";
import React, { FormEventHandler, useRef, useState } from "react";

type mysteryObj = {
  numOfChallenger: number;
  numOfSolvedPeople: number;
  numOfNewChallenger: number;
  numOfNewSolvedPeople: number;
};

type Props = {
  mysteryObj: mysteryObj;
  setMysteryObj: React.Dispatch<React.SetStateAction<mysteryObj>>;
};

export const MysteryForm = ({ mysteryObj, setMysteryObj }: Props) => {
  const InputOfNumOfNewChallengerRef = useRef<HTMLInputElement>(null);
  const InputOfNumOfNewSolvedPeopleRef = useRef<HTMLInputElement>(null);

  const onClickButtonIncreasesNewSolvedPeoplebyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryObj((prev) => ({
      ...prev,
      numOfNewSolvedPeople: prev.numOfNewSolvedPeople + 1,
    }));
  };

  const onClickButtonDecreasesNewSolvedPeoplebyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryObj((prev) => ({
      ...prev,
      numOfNewSolvedPeople: prev.numOfNewSolvedPeople - 1,
    }));
  };

  const onClickButtonIncreasesNewChallengerbyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryObj((prev) => ({
      ...prev,
      numOfNewChallenger: prev.numOfNewChallenger + 1,
    }));
  };

  const onClickButtonDecreasesNewChallengerbyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryObj((prev) => ({
      ...prev,
      numOfNewChallenger: prev.numOfNewChallenger - 1,
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
    if (InputOfNumOfNewChallengerRef.current) {
      let input: string = InputOfNumOfNewChallengerRef.current.value;
      input = input.replace(/[^0-9^０-９]/g, "");

      //inputのすべての全角数字を半角に
      input = input.replace(/[０-９]/g, (s: string) => {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      setMysteryObj((prev) => ({
        ...prev,
        numOfNewChallenger: +input,
      }));
    }
  };

  const handleNewSolvedPeopleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (InputOfNumOfNewSolvedPeopleRef.current) {
      let input: string = InputOfNumOfNewSolvedPeopleRef.current.value;
      input = input.replace(/[^0-9^０-９]/g, "");

      //inputのすべての全角数字を半角に
      input = input.replace(/[０-９]/g, (s: string) => {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      setMysteryObj((prev) => ({
        ...prev,
        numOfNewSolvedPeople: +input,
      }));
    }
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
          ref={InputOfNumOfNewChallengerRef}
        />
        <InputWithTitle
          title={`新たな\n完全クリア人数`}
          value={mysteryObj.numOfNewSolvedPeople}
          onMinusClick={onClickButtonDecreasesNewSolvedPeoplebyOne}
          onPlusClick={onClickButtonIncreasesNewSolvedPeoplebyOne}
          handleInputChange={handleNewSolvedPeopleInputChange}
          ref={InputOfNumOfNewSolvedPeopleRef}
        />
        <Button type="submit">決定</Button>
      </form>
    </>
  );
};
