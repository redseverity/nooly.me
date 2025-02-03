"use client";

import clsx from "clsx";
import { ComponentPropsWithRef, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const GridBg = ({ ...props }: ComponentPropsWithRef<"canvas">) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // get current theme (dark or light)
  const { theme } = useTheme();

  useEffect(() => {
    // get the canvas element
    const canvas = canvasRef.current;
    if (!canvas) return;

    // get the 2d rendering context
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const spacing = 64;

      // adjust canvas size to match the window
      canvas.width = width;
      canvas.height = height;

      // clear previos drawings
      ctx.clearRect(0, 0, width, height);

      // get the stroke color based on the current theme
      const rootStyles = getComputedStyle(document.documentElement);

      const strokeClass = canvas.classList.value
        .split(" ")
        .filter((e) =>
          theme == "dark" ? e.includes("dark:stroke") : e.includes("stroke"),
        )
        .filter((e) =>
          theme == "dark" ? e.includes("dark:") : !e.includes("dark:"),
        )
        .toString()
        .replace("dark:", "")
        .replace("stroke-", "--");

      ctx.strokeStyle = rootStyles.getPropertyValue(strokeClass).trim();

      ctx.lineWidth = 1;

      // Draw diagonal grid lines from top-left to bottom-right
      for (let x = -height; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + height, height);
        ctx.stroke();
      }

      // Draw diagonal grid lines from bottom-left to top-right
      for (let y = 0; y < height + width; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y - width);
        ctx.stroke();
      }
    };

    drawGrid();

    // Redraw grid when the window is resized
    window.addEventListener("resize", drawGrid);
    return () => window.removeEventListener("resize", drawGrid);
  }, [theme]); // Re-run effect when the theme changes

  return (
    <canvas ref={canvasRef} {...props} className={clsx("", props.className)} />
  );
};

export { GridBg };
