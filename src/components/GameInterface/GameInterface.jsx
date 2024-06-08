import GameControls from "./GameControls/GameControls";
import GamePlayWindow from "./GamePlayWindow/GamePlayWindow";
import gameInterfaceStyles from "./gameinterface.module.css";
import { useState } from "react";

export default function GameInterface() {
  // const [hit, setHit] = useState(0);
  // const [targetMissed, setTargetMissed] = useState(0);
  const [gameState, setGameState] = useState({
    hit: 0,
    targetMissed: 0,
    targetCount: 1,
  });

  console.log(
    `Target Missed: ${gameState.targetMissed} -- Target Hit: ${gameState.hit}`
  );
  return (
    <article className={gameInterfaceStyles.gameInterface}>
      <GamePlayWindow gameState={gameState} setGameState={setGameState} />
      <GameControls gameState={gameState} setGameState={setGameState} />
    </article>
  );
}
