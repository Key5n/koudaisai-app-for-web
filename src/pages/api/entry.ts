import admin from "lib/nodeApp";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "types/types";

export default async function entry(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { users, password },
  }: { body: { users: User[]; password: string } } = req;

  if (password !== process.env.NEXT_PUBLIC_PASS) {
    return res.status(401).json({ error: { message: "セキュリティエラー" } });
  }
  console.log("users: ", users);

  const makeEntry = async (): Promise<void> => {
    const db = admin.firestore();
    users.forEach(async (user) => {
      const uid = user.uid;
      const firstDate: 16 = 16;
      const secondDate: number = firstDate + 1;

      const dayXVisited =
        new Date().getDate() === firstDate ? "dayOneVisited" : "dayTwoVisited";
      const dayXSelected =
        new Date().getDate() === firstDate
          ? "dayOneSelected"
          : "dayTwoSelected";

      const koudaisaiUserDocRef = db.collection("KoudaisaiUser").doc(uid);
      const documentSnapShot = await koudaisaiUserDocRef.get();

      const hasEnteredToday: boolean = documentSnapShot.get(dayXVisited);

      console.log("Retrieved data: ", documentSnapShot.data(), hasEnteredToday);

      if (!documentSnapShot.exists) {
        console.log("undefined doc error");
        return res.status(400).json({
          error: {
            message: "データが存在していません。QRコード内の形式が不整合です。",
          },
        });
      }
      if (hasEnteredToday) {
        console.log("already entry error");
        return res
          .status(400)
          .json({ message: `${dayXVisited}はtrueです。既に入場しています。` });
      }
      if (!dayXSelected) {
        console.log("no reserve error");
        return res.status(400).json({
          message: `${dayXSelected}はfalseです。この日は予約されていません。`,
        });
      }

      await koudaisaiUserDocRef
        .update({
          [dayXVisited]: true,
        })
        .catch((error) => {
          console.log(error);
          return res.status(500).json({ message: error });
        });
      console.log("入場");
    });
    console.log("全員入場処理が完了しました。");
    return res.status(200).json({ message: "全員入場処理が完了しました。" });
  };
  await makeEntry();
}
