import styles from "styles/components.module.css";
import { FaceOfTamago } from "components/atoms/faceOfTamago";
import { FaceOfKofunman } from "components/atoms/faceOfKofunman";

export const KofunmanAndTamago: React.FC = () => {
  return (
    <div className={styles.KofunmanAndTamago}>
      <FaceOfKofunman size="106px" />
      <FaceOfTamago width="121px" height="106px" />
    </div>
  );
};
