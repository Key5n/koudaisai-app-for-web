import styles from "./styles.module.css";
import { KofunmanTalking } from "components/atoms/KofunmanTalking";
import { AnchorButton } from "components/atoms/AnchorButton";
import { Button } from "components/atoms/Button";
import { Header } from "components/organisms/header";
import { useState } from "react";
import { ModalWindow } from "components/organisms/modalWindow";

type Props = {
  toggleState: () => void;
};

export const AgreementTemplate = ({ toggleState }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Header title="同意" />
      <main className={styles.module}>
        <KofunmanTalking line="以下のことをご了承願います" />
        <ul>
          <li>マスクを着用すること</li>
          <li>アルコール消毒に協力すること</li>
          <li>進入禁止場所に入らないこと</li>
          <li>委員会が提示する新型コロナウイルス感染症対策に従うこと</li>
          <li>運営者のコロナウイルス感染対策に関する指示に従うこと</li>
          <li>ソーシャルディスタンス確保に協力すること</li>
          <li>入場後に体調を崩した場合は速やかにスタッフに申し出ること</li>
        </ul>
      </main>
      <div className={styles.AgreementButtonWrapper}>
        <Button className={styles.AgreementButton} onClick={toggleState}>
          同意しない
        </Button>
        <Button className={styles.AgreementButton} onClick={onClick}>
          同意する
        </Button>
      </div>
      {isModalOpen && <ModalWindow hideModal={onClick} />}
    </>
  );
};