import targetCircleStyles from "./targetcircle.module.css";
import { useState } from "react";
export default function Target({ gameState, setGameState }) {
  const [targetPosition, setTargetPosition] = useState({
    x: Math.floor(Math.random() * 90) + 1,
    y: Math.floor(Math.random() * 90) + 1,
  });

  const handleTarget = (e) => {
    if (e.currentTarget === e.target) {
      // Update hit count using spread operator
      setGameState({ ...gameState, hit: gameState.hit + 1 });
      // Update target position independently
      setTargetPosition({
        x: Math.floor(Math.random() * 90) + 1,
        y: Math.floor(Math.random() * 90) + 1,
      });
    } else {
      // Update target missed count using spread operator
      setGameState({ ...gameState, targetMissed: gameState.targetMissed + 1 });
    }
  };

  return (
    <div
      className={targetCircleStyles.game_target}
      style={{ right: `${targetPosition.x}%`, top: `${targetPosition.y}%` }}
      onClick={handleTarget}
    ></div>
  );
}
