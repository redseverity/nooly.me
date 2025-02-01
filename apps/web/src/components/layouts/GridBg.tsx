"use client";

import clsx from "clsx";
import { ComponentProps, useEffect, useRef } from "react";

const GridBg = ({ ...props }: ComponentProps<"canvas">) => {
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
      let strokeClass = canvas.classList.value
        .split(" ")
        .filter((e) => e.includes("stroke"));

      ctx.strokeStyle = rootStyles
        .getPropertyValue(`--${strokeClass.toString().replace("stroke-", "")}`)
        .trim();
      ctx.lineWidth = 1;

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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      {...props}
      className={clsx("z-0 fixed stroke-dark-4", props.className)}
    />
  );
};

export { GridBg };
