import styles from "./styles.module.css";
import { KofunmanTalking } from "components/atoms/KofunmanTalking";
import { Header } from "components/organisms/header";
import { AnchorButton } from "components/atoms/AnchorButton";
import { InputWithTitle } from "components/molecules/InputWithTitle/InputWithTitle";
import { Checkbox } from "components/molecules/checkbox";
import { Button } from "components/atoms/Button";

type Props = {
  toggleState: () => void;
};

export const SignupTemplate = ({ toggleState }: Props) => {
  return (
    <>
      <Header title="新規予約" />
      <main className={styles.module}>
        <>
          <KofunmanTalking line="予約のために次のことを教えてね" />
          <div className={styles.content}>
            <InputWithTitle title="お名前" placeholder="名工太郎" />
            <InputWithTitle
              title="メールアドレス"
              placeholder="aiu@gmail.com"
            />
            <InputWithTitle title="電話番号" placeholder="09012345678" />
            <div className={styles.entryDate}>
              <span className={styles.title}>希望入場日</span>
              <Checkbox title={"11/19(土)"} />
              <Checkbox title={"11/20(日)"} />
            </div>
            <InputWithTitle
              title="パスワード"
              description="パスワードは6文字以上で数字または英文字で構成される必要があります。"
            />
            <Button className={styles.button} onClick={toggleState}>
              次へ
            </Button>
          </div>
        </>
      </main>
    </>
  );
};
