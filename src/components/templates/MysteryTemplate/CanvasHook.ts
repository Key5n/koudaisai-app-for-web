import { useRef, useEffect } from "react";
type draw = (
  ctx: CanvasRenderingContext2D | null | undefined,
  frameCount: number
) => void;

export const useCanvas = (draw: draw) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    let frameCount: number = 0;
    let animationFrameId: number;
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return canvasRef;
};
