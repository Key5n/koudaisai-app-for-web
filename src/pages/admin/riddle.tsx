import { RiddleTemplate } from "components/templates/RiddleTemplate/RiddleTemplate";
type draw = (
  ctx: CanvasRenderingContext2D | null | undefined,
  frameCount: number
) => void;

const Riddle: React.FC = () => {
  const draw = (
    ctx: CanvasRenderingContext2D | null | undefined,
    frameCount: number
  ): void => {
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  return (
    <>
      <RiddleTemplate />
    </>
  );
};

export default Riddle;
