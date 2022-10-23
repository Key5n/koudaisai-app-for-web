import styles from "./styles.module.css";
import { Field } from "../../atoms/Field";
import { InputWithTitle } from "../InputWithTitle";
import { Button } from "components/atoms/Button";
import React, { FormEventHandler, useRef, useState } from "react";

type mysteryData = {
  numOfChallenger: number;
  numOfSolver: number;
  numOfNewChallenger: number;
  numOfNewSolver: number;
};

type Props = {
  mysteryData: mysteryData;
  setMysteryData: React.Dispatch<React.SetStateAction<mysteryData>>;
};

export const MysteryForm = ({ mysteryData, setMysteryData }: Props) => {
  const InputOfNumOfNewChallengerRef = useRef<HTMLInputElement>(null);
  const InputOfNumOfNewSolverRef = useRef<HTMLInputElement>(null);

  const onClickButtonIncreasesNewSolverbyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryData((prev) => ({
      ...prev,
      numOfNewSolver: prev.numOfNewSolver + 1,
    }));
  };

  const onClickButtonDecreasesNewSolverbyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryData((prev) => ({
      ...prev,
      numOfNewSolver: prev.numOfNewSolver - 1,
    }));
  };

  const onClickButtonIncreasesNewChallengerbyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryData((prev) => ({
      ...prev,
      numOfNewChallenger: prev.numOfNewChallenger + 1,
    }));
  };

  const onClickButtonDecreasesNewChallengerbyOne = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setMysteryData((prev) => ({
      ...prev,
      numOfNewChallenger: prev.numOfNewChallenger - 1,
    }));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMysteryData({
      numOfChallenger:
        mysteryData.numOfChallenger + mysteryData.numOfNewChallenger,
      numOfSolver: mysteryData.numOfSolver + mysteryData.numOfNewSolver,
      numOfNewChallenger: 0,
      numOfNewSolver: 0,
    });

    const data = {
      numOfNewChallenger: mysteryData.numOfNewChallenger,
      numOfNewSolver: mysteryData.numOfNewSolver,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);

    const result = await response.json();
    alert(`The number: ${result.data}`);
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
      setMysteryData((prev) => ({
        ...prev,
        numOfNewChallenger: +input,
      }));
    }
  };

  const handleNewSolverInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (InputOfNumOfNewSolverRef.current) {
      let input: string = InputOfNumOfNewSolverRef.current.value;
      input = input.replace(/[^0-9^０-９]/g, "");

      //inputのすべての全角数字を半角に
      input = input.replace(/[０-９]/g, (s: string) => {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      setMysteryData((prev) => ({
        ...prev,
        numOfNewSolver: +input,
      }));
    }
  };

  return (
    <>
      <form className={styles.module} onSubmit={onSubmit}>
        <Field title={"挑戦人数"} value={mysteryData.numOfChallenger} />
        <Field title={"完全クリア人数"} value={mysteryData.numOfSolver} />
        <InputWithTitle
          title={`新たな\n挑戦人数`}
          value={mysteryData.numOfNewChallenger}
          onMinusClick={onClickButtonDecreasesNewChallengerbyOne}
          onPlusClick={onClickButtonIncreasesNewChallengerbyOne}
          handleInputChange={handleNewChallengerInputChange}
          ref={InputOfNumOfNewChallengerRef}
        />
        <InputWithTitle
          title={`新たな\n完全クリア人数`}
          value={mysteryData.numOfNewSolver}
          onMinusClick={onClickButtonDecreasesNewSolverbyOne}
          onPlusClick={onClickButtonIncreasesNewSolverbyOne}
          handleInputChange={handleNewSolverInputChange}
          ref={InputOfNumOfNewSolverRef}
        />
        <Button type="submit">決定</Button>
      </form>
    </>
  );
};
