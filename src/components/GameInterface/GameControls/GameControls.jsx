import gameControlsStyles from "./gamecontrols.module.css";
export default function GameControls({ gameState, setGameState }) {
  const handleAddTarget = () => {
    setGameState({ ...gameState, targetCount: gameState.targetCount + 1 });
  };
  return (
    <section className={gameControlsStyles.score}>
      <div className={gameControlsStyles.hitMissedContainer}>
        <h2>
          Target Missed: <span>{gameState.targetMissed}</span>
        </h2>
        <h2>
          Target Hit: <span>{gameState.hit}</span>
        </h2>
      </div>
      <button onClick={handleAddTarget}>Add Target</button>
    </section>
  );
}
