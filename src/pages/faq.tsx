import { FAQ } from "@/features/faq";
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
  return <FAQ postData={postData} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getContent("faq");
  return {
    props: {
      postData,
    },
  };
};

export default Page;
