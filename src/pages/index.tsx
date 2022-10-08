import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ReservationTemplate } from "components/templates/ReservationTemplate";

const Index: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <ReservationTemplate />
    </>
  );
};

export default Index;
