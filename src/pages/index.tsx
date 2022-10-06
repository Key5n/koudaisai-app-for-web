import type { NextPage } from "next";
import ReservationTemplate from "components/templates/reservationTemplate";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <ReservationTemplate />
    </>
  );
};

export default Index;
