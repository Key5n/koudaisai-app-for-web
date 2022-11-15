import { NextApiRequest, NextApiResponse } from "next";
import admin from "lib/nodeApp";

export default async function updateDB(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  const {
    numOfNewChallenger,
    numOfNewSolver,
  }: { numOfNewChallenger: number; numOfNewSolver: number } = body;

  console.log("body: ", body);

  const db = admin.firestore();
  const mysteryDocRef = db.collection("admin").doc("mystery");
  await mysteryDocRef.update({
    numOfChallenger: admin.firestore.FieldValue.increment(numOfNewChallenger),
    numOfSolver: admin.firestore.FieldValue.increment(numOfNewSolver),
  });

  // Found the name.
  // Sends a HTTP success code
  return res.status(200).json("数の更新が正常に行われました。");
}
