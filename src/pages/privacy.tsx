import type { NextPage } from "next";
import styles from './styles.module.css';
import Head from "next/head";
import { PrivacyTemplate } from "components/templates/PrivacyTemplate";
import { GetStaticProps } from "next";
import { getMarkdown } from "lib/posts";

const Privacy = ({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) => {
  return (
    <>
      <div className={styles.markdown}>
        <h1 className={styles.title}>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getMarkdown()
  return {
    props: {
      postData
    }
  }
}

export default Privacy;
