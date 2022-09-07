import { FC } from "react";

const Line: FC<{ line?: string }> = ({
  line = "セリフ",
}: {
  line?: string;
}) => {
  return <h2>{line}</h2>;
};

export default Line;
