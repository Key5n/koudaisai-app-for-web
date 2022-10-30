import { GetStaticProps } from "next";
import { getMarkdown } from "lib/posts";
import { PrivacyTemplate } from "components/templates/PrivacyTemplate";

const Privacy = ({
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
      <PrivacyTemplate postData={postData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getMarkdown();
  return {
    props: {
      postData,
    },
  };
};

export default Privacy;
