import { useEffect, useRef, useState } from "react";
import canvasTestStyles from "./canvastest.module.css";
export default function CanvasTest() {
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const [mouse, setMouse] = useState({
    y: null,
    x: null,
  });

  const handleClick = (event) => {
    setMouse({ y: event.screenY, x: event.screenX });
  };
  function createCircle() {
    ctx.fillStyle = "red";
    ctx.fillStroke = "blue";
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.stroke();
  }
  console.log(mouse);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  return (
    <canvas
      className={canvasTestStyles.canvas1}
      ref={canvasRef}
      onClick={handleClick}
    ></canvas>
  );
}
