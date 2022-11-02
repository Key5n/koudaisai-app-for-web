import { GetStaticProps } from "next";
import { PrivacyTemplate } from "components/templates/PrivacyTemplate";
import { getContent } from "lib/posts";

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
  const postData = await getContent("privacy-policy");
  return {
    props: {
      postData,
    },
  };
};

export default Privacy;
