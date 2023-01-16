import styles from "./styles.module.css";
import clsx from "clsx";
import { KofunmanTalking } from "@/features/ui/KofunmanTalking";

export const Agreement = () => {
  return (
    <div className={styles.module}>
      <KofunmanTalking
        line={{ children: "以下のことをご了承願います" }}
        mode={1}
      />
      <ul>
        <li>マスクを着用すること</li>
        <li>アルコール消毒に協力すること</li>
        <li>進入禁止場所に入らないこと</li>
        <li>委員会が提示する新型コロナウイルス感染症対策に従うこと</li>
        <li>運営者のコロナウイルス感染対策に関する指示に従うこと</li>
        <li>ソーシャルディスタンス確保に協力すること</li>
        <li>入場後に体調を崩した場合は速やかにスタッフに申し出ること</li>
      </ul>
    </div>
  );
};
