import { MysteryTemplate } from "components/templates/MysteryTemplate";
import admin from "lib/nodeApp";

type Props = {
  data: { numOfChallenger: number; numOfSolver: number };
};

const Mystery = ({ data }: Props) => {
  return (
    <div>
      <MysteryTemplate data={data} />
    </div>
  );
};

export async function getServerSideProps() {
  const db = admin.firestore();
  const mysteryDoc = await db.collection("admin").doc("mystery").get();

  return { props: { data: mysteryDoc.data() } };
}

export default Mystery;
