import admin from "lib/nodeApp";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body: { uid, password },
  }: { body: { uid: string; password: string } } = req;

  if (password !== process.env.NEXT_PUBLIC_PASS) {
    return res.status(401).json({ error: { message: "セキュリティエラー" } });
  }

  const db = admin.firestore();
  const userDocRef = db.collection("KoudaisaiUser").doc(uid);
  const documentSnapShot = await userDocRef.get();

  if (!documentSnapShot.exists) {
    return res
      .status(400)
      .json({ error: { message: "Document doesn't exist" } });
  }
  return res.status(200).json({ ...documentSnapShot.data(), uid: uid });
}
