import admin from "lib/nodeApp";
import { NextApiRequest, NextApiResponse } from "next";

export default async function entry(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { uid, password }: { uid: string; password: string } = body;
  console.log("body", body);
  if (new RegExp("https?://[w/:%#$&?()~.=+-]+").test(uid)) {
    res.status(400).json("読み込んだのはURLです。");
  }
  if (uid.length !== 20 && uid.length !== 28) {
    res.status(400).json("読み込んだのはユーザーIDではありません。");
  }

  const db = admin.firestore();
  const koudaisaiUserDocRef = db.collection("KoudaisaiUser").doc(uid);
  await koudaisaiUserDocRef
    .update(koudaisaiUserDocRef, {
      dayOneVisited: true,
    })
    .catch((error) => {
      console.log(error);
      throw new error();
    });

  return res.status(200).json("入場させました。");
}
