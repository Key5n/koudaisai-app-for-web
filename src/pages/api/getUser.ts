import admin from "lib/nodeApp";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = admin.firestore();
  const {
    body: { uids, password },
  }: { body: { uids: string[]; password: string } } = req;

  if (password !== process.env.NEXT_PUBLIC_PASS) {
    return res.status(401).json({ error: { message: "セキュリティエラー" } });
  }

  const users = uids.map(async (uid) => {
    const user = await db
      .collection("KoudaisaiUser")
      .doc(uid)
      .get()
      .catch((error) => {
        return res.status(400).json({ error: { message: error } });
      });
    return user;
  });
  return res.status(200).json({ users: users });
}
