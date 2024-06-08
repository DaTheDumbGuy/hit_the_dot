import gamePlayWindowStyles from "./gameplaywindow.module.css";
import TargetCircle from "./TargetCircle/TargetCircle";
export default function GamePlayWindow({ gameState, setGameState }) {
  const handleMissed = (e) => {
    if (e.currentTarget === e.target) {
      setGameState({ ...gameState, targetMissed: gameState.targetMissed + 1 });
    }
  };
  return (
    <section
      className={gamePlayWindowStyles.game_play_window}
      onClick={handleMissed}
    >
      {Array(gameState.targetCount)
        .fill(null)
        .map((_, index) => (
          <TargetCircle
            key={index}
            gameState={gameState}
            setGameState={setGameState}
          />
        ))}
    </section>
  );
}
