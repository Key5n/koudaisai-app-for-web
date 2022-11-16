import { async } from "@firebase/util";
import admin from "lib/nodeApp";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "types/types";

export default async function entry(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { uid, password },
  }: { body: { uid: string; password: string } } = req;
  console.log("uid: ", uid);
  if (uid.length !== 20 && uid.length !== 28) {
    console.log("読み込んだのはuidじゃないよ");
    res
      .status(400)
      .json({ error: { message: "読み込んだのはユーザーIDではありません。" } });
  }

  const makeEntry = async (): Promise<void> => {
    const db = admin.firestore();
    const koudaisaiUserDocRef = db.collection("KoudaisaiUser").doc(uid);
    const documentSnapShot = await koudaisaiUserDocRef.get();

    const selectFieldAccordingToTheDate = () => {
      const date = new Date().getDate();
      const firstDate = 16;
      const res = date === firstDate ? "dayOneVisited" : "dayTwoVisited";
      return res;
    };

    const dayXVisited = selectFieldAccordingToTheDate();

    const hasEnteredToday = documentSnapShot.get(
      selectFieldAccordingToTheDate()
    );

    console.log("Retrieved data: ", documentSnapShot.data(), hasEnteredToday);

    if (!documentSnapShot.exists) {
      res
        .status(400)
        .json({ error: { message: "データが存在していません。" } });
    }
    if (hasEnteredToday) {
      res.status(200).json({ message: `${dayXVisited}はtrueです。` });
    }

    await koudaisaiUserDocRef
      .update({
        [dayXVisited]: true,
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "書き込み中にエラーが発生しました。" });
      });
  };
  console.log("入場");
  res.status(200).json("入場させました。");
}
