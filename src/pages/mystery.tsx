import admin from "lib/nodeApp";
import { useState } from "react";
import { MysteryTemplate } from "components/templates/MysteryTemplate";

type Props = {
  data: { numOfChallenger: number; numOfSolver: number };
};

type mysteryData = {
  numOfChallenger: number;
  numOfSolver: number;
  numOfNewChallenger: number;
  numOfNewSolver: number;
};

const Mystery = ({ data }: Props) => {
  const [mysteryData, setMysteryData] = useState<mysteryData>({
    numOfChallenger: data.numOfChallenger,
    numOfSolver: data.numOfSolver,
    numOfNewChallenger: 0,
    numOfNewSolver: 0,
  });
  return (
    <>
      <MysteryTemplate
        numOfChallenger={mysteryData.numOfChallenger}
        numOfSolver={mysteryData.numOfSolver}
      />
    </>
  );
};

export async function getServerSideProps() {
  const db = admin.firestore();
  const mysteryDoc = await db.collection("admin").doc("mystery").get();

  return { props: { data: mysteryDoc.data() } };
}

export default Mystery;
