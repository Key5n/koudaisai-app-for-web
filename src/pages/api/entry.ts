import admin from "lib/nodeApp";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "types/types";

export default async function entry(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { uid, password }: { uid: string; password: string } = body;
  console.log("body", body);
  if (uid.length !== 20 && uid.length !== 28) {
    console.log("読み込んだのはuidじゃないよ")
    res.status(400).json("読み込んだのはユーザーIDではありません。");
  }
  const date: 'dayOneVisited' | 'dayTwoVisited' = 'dayTwoVisited';

  const db = admin.firestore();
  const koudaisaiUserDocRef = db.collection("KoudaisaiUser").doc(uid);
  const documentSnapShot = await koudaisaiUserDocRef.get();
  const hasEnteredToday = documentSnapShot.get(date);

  console.log("Retrieved data: ", documentSnapShot.data(), hasEnteredToday);

  if (!documentSnapShot.exists) {
    return res.status(200).json("データが存在していません。")
  }
  if (hasEnteredToday) {
    return res.status(200).json(`${date}はtrueです。`)
  }

  const updatedData = await koudaisaiUserDocRef
    .update({
      [date]: true,
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json("書き込み中にエラーが発生しました。")
    });

  console.log("入場")
  return res.status(200).json("入場させました。");
}
