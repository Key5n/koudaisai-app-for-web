import { GetStaticProps } from "next";
import { FAQTemplate } from "components/templates/FAQTemplate";
import { getContent } from "lib/posts";

const FAQ = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => {
  return (
    <>
      <FAQTemplate postData={postData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getContent("faq");
  return {
    props: {
      postData,
    },
  };
};

export default FAQ;
