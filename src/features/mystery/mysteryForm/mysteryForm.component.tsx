import styles from "./styles.module.css";
import clsx from "clsx";
import React, { FormEventHandler, useRef } from "react";
import { Field } from "../Field";
import { MysteryInputWithTitle } from "./mysteryInputWithTitle";
import { Button } from "@/features/ui/Button";

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

  const onNumOfNewChallengerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMysteryData((prev) => {
      return {
        ...prev,
        numOfNewChallenger: +e.target.value,
      };
    });
  };

  const onNumOfNewSolverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMysteryData((prev) => {
      return {
        ...prev,
        numOfNewSolver: +e.target.value,
      };
    });
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
    await fetch(endpoint, options);
  };

  return (
    <form className={styles.module} onSubmit={onSubmit}>
      <Field title={"挑戦人数"} value={mysteryData.numOfChallenger} />
      <Field title={"完全クリア人数"} value={mysteryData.numOfSolver} />
      <MysteryInputWithTitle
        title={`新たな\n挑戦人数`}
        value={mysteryData.numOfNewChallenger}
        onMinusClick={onClickButtonDecreasesNewChallengerbyOne}
        onPlusClick={onClickButtonIncreasesNewChallengerbyOne}
        onChange={onNumOfNewChallengerChange}
        ref={InputOfNumOfNewChallengerRef}
      />
      <MysteryInputWithTitle
        title={`新たな\n完全クリア人数`}
        value={mysteryData.numOfNewSolver}
        onChange={onNumOfNewSolverChange}
        onMinusClick={onClickButtonDecreasesNewSolverbyOne}
        onPlusClick={onClickButtonIncreasesNewSolverbyOne}
        ref={InputOfNumOfNewSolverRef}
      />
      <Button type="submit" className={styles.button}>
        決定
      </Button>
    </form>
  );
};
