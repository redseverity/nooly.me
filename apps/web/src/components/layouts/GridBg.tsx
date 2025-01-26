"use client";

import { useEffect, useRef } from "react";

interface GridBgProps {
  dark: boolean;
}

const GridBg: React.FC<GridBgProps> = (dark) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const spacing = 64;

      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);

      const rootStyles = getComputedStyle(document.documentElement);
      ctx.strokeStyle = dark
        ? rootStyles.getPropertyValue("--dark-4").trim()
        : rootStyles.getPropertyValue("--white-4").trim();
      ctx.lineWidth = 1;

      // draw lines
      for (let x = -height; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + height, height);
        ctx.stroke();
      }

      for (let y = 0; y < height + width; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y - width);
        ctx.stroke();
      }
    };

    drawGrid();

    window.addEventListener("resize", drawGrid);
    return () => window.removeEventListener("resize", drawGrid);
  }, [dark]);

  return <canvas ref={canvasRef} className="z-0 fixed text-red-500" />;
};

export { GridBg };
