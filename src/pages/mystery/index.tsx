import { Mystery } from "@/features/mystery";
import admin from "@/lib/firebase/nodeApp";

type Props = {
  data: { numOfChallenger: number; numOfSolver: number };
};

const Page = ({ data }: Props) => {
  return (
    <Mystery
      data={{
        numOfChallenger: data.numOfChallenger,
        numOfSolver: data.numOfSolver,
      }}
    />
  );
};

export async function getServerSideProps() {
  const db = admin.firestore();
  const mysteryDoc = await db.collection("admin").doc("mystery").get();

  return { props: { data: mysteryDoc.data() } };
}

export default Page;
