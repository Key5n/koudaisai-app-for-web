import { NextApiRequest, NextApiResponse } from "next";
import admin from "lib/nodeApp";
import {
  increment,
  updateDoc,
  doc,
  DocumentReference,
  SnapshotOptions,
  SetOptions,
  DocumentData,
} from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data submitted in request's body.
  const body = req.body;
  const {
    numOfNewChallenger,
    numOfNewSolver,
  }: { numOfNewChallenger: number; numOfNewSolver: number } = body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  const db = admin.firestore();
  // const mysteryDocRef = await db
  //   .collection("admin")
  //   .doc("mystery")
  //   .withConverter(mysteryConverter);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (numOfNewChallenger < numOfNewSolver) {
    // Sends a HTTP bad request error code
    return res.status(400).json({
      data: "The number of new solver more than the number of new challenger",
    });
  }
  const mysteryDocRef = db.collection("admin").doc("mystery");
  await mysteryDocRef.update({
    numOfChallenger: admin.firestore.FieldValue.increment(numOfNewChallenger),
    numOfSolver: admin.firestore.FieldValue.increment(numOfNewSolver),
  });

  // Found the name.
  // Sends a HTTP success code
  res
    .status(200)
    .json({ data: `${body.numOfNewChallenger} ${body.numOfNewSolver}` });
}
