import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
};

export const FAQ = ({ postData }: Props) => {
  return (
    <div className={styles.module}>
      <h1 className={styles.title}>{postData.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className={styles.markdown}
      ></div>
    </div>
  );
};
