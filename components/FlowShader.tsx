"use client";

import { useEffect, useRef } from "react";

export default function FlowShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.003;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");
      const strokeColor = isDark
        ? "rgba(255, 255, 255, 0.04)"
        : "rgba(10, 10, 10, 0.035)";
      const accentColor = isDark
        ? "rgba(249, 115, 22, 0.08)"
        : "rgba(249, 115, 22, 0.06)";

      ctx.lineWidth = 1.2;

      // Draw elegant flowing curves
      const lines = 12;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.strokeStyle = i % 4 === 0 ? accentColor : strokeColor;

        for (let x = 0; x < width; x += 15) {
          const y =
            height * 0.45 +
            Math.sin(x * 0.002 + time + i * 0.4) * 90 +
            Math.cos(x * 0.001 - time * 0.8 + i) * 60;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
