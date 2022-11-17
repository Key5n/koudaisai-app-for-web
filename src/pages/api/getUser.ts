import admin from "lib/nodeApp";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body: { content, password },
  }: { body: { content: string; password: string } } = req;

  const uid = content.replace('koudaisai/', '');

  if (password !== process.env.NEXT_PUBLIC_PASS) {
    return res.status(401).json({ error: true, message: "セキュリティエラー" });
  }

  const db = admin.firestore();
  let userDocRef;
  let documentSnapShot;
  try {
    userDocRef = db.collection("KoudaisaiUser").doc(uid);
    documentSnapShot = await userDocRef.get();
  } catch (error) {
    return res.status(400).json({ error: true, message: `QRコードに不具合があります。\n読み込んだもの: ${content}\n` + error })
  }

  if (!documentSnapShot?.exists) {
    return res
      .status(400)
      .json({ error: true, message: `${uid}はデータベース内にありません。` });
  }
  return res.status(200).json({ ...documentSnapShot.data(), uid: uid });
}
