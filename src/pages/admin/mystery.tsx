import { MysteryTemplate } from "components/templates/MysteryAdminTemplate";
import admin from "lib/nodeApp";

type Props = {
  data: { numOfChallenger: number; numOfSolver: number };
};

const Mystery = ({ data }: Props) => {
  return (
    <>
      <MysteryTemplate data={data} />
    </>
  );
};

export async function getServerSideProps() {
  const db = admin.firestore();
  const mysteryDoc = await db.collection("admin").doc("mystery").get();

  return { props: { data: mysteryDoc.data() } };
}

export default Mystery;
