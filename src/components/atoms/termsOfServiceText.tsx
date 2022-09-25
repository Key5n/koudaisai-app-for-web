import { FC } from "react";
import styles from "/src/styles/components.module.css";

const TermsOfServiceText = () => {
  return (
    <div className={styles.termsOfServiceText}>
      <p>参加の条件</p>
      <ul>
        <li>マスクを着用すること</li>
        <li>アルコール消毒に協力すること</li>
        <li>進入禁止場所に入ること</li>
        <li>委員会が提示する新型コロナウイルス感染症対策</li>
        <li>運営者の指示に従うこと</li>
        <li>ソーシャルディスタンス確保に協力すること</li>
        <li>入場後に体調を崩した場合は速やかにスタッフに申し出ること</li>
      </ul>
    </div>
  );
};

export default TermsOfServiceText;
