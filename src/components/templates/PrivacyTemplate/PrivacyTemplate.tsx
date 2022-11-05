import styles from "./styles.module.css";

type Props = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
};

export const PrivacyTemplate = ({ postData }: Props) => {
  return (
    <div className={styles.markdown}>
      <h1 className={styles.title}>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </div>
  );
};
