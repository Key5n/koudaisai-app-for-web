import { Privacy } from "@/features/privacy";
import { getContent } from "@/lib/posts";
import { GetStaticProps } from "next";

const Page = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => {
  return <Privacy postData={postData} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getContent("privacy-policy");
  return {
    props: {
      postData,
    },
  };
};

export default Page;
