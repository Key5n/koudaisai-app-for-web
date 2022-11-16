import admin from "lib/nodeApp";
import { NextApiRequest, NextApiResponse } from "next";

export default async function entry(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { QRCodeData, password },
  }: { body: { QRCodeData: string[]; password: string } } = req;

  if (password !== process.env.NEXT_PUBLIC_PASS) {
    return res.status(400).json({ error: { message: "セキュリティエラー" } });
  }
  console.log("QRCodeData: ", QRCodeData);

  const makeEntry = async (): Promise<void> => {
    const db = admin.firestore();
    QRCodeData.forEach(async (uid: string) => {
      const firstDate: 16 = 16;
      const secondDate: 17 = 17;

      const dayXVisited =
        new Date().getDate() === firstDate ? "dayOneVisited" : "dayTwoSelected";
      const dayXSelected =
        new Date().getDate() === firstDate
          ? "dayOneSelected"
          : "dayTwoSelected";

      const koudaisaiUserDocRef = db.collection("KoudaisaiUser").doc(uid);
      const documentSnapShot = await koudaisaiUserDocRef.get();

      const hasEnteredToday = documentSnapShot.get(dayXVisited);

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
          return res
            .status(500)
            .json({ message: "書き込み中にエラーが発生しました。" });
        });
    });
  };
  await makeEntry();
  console.log("入場");
  return res.status(200).json("入場させました。");
}
