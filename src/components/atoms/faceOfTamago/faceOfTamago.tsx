import styles from "styles/components.module.css";
import Image from "next/image";

export const FaceOfTamago: React.FC<{ width: string; height: string }> = ({
  width,
  height,
}) => {
  return (
    <Image
      src="/images/faceOfTamago.png"
      alt="Tamago-chan"
      width={width}
      height={height}
    />
  );
};

