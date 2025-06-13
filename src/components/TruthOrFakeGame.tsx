import { useEffect, useState } from 'react';
import { Container, Stack } from '@mantine/core';
import { GameHeader } from './GameHeader';
import { ScoreCard } from './ui/ScoreCard';
import { GameBoard } from './GameBoard';
import { GameNotification } from './ui/GameNotification';
import { HistoryModal } from './ui/HistoryModal';
import { useGameState } from '../hooks/useGameState';

const TruthOrFakeGame = () => {
  const { gameState, notification, generateNewRound, handleGuess, resetGame } = useGameState();
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    generateNewRound();
  }, [generateNewRound]);

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <GameHeader />
        <ScoreCard
          score={gameState.score}
          hasHistory={gameState.rounds.length > 0}
          onShowHistory={() => setShowHistory(true)}
        />
        <GameBoard gameState={gameState} onGuess={handleGuess} onRestart={resetGame} />
        <GameNotification notification={notification} />
        <HistoryModal
          opened={showHistory}
          onClose={() => setShowHistory(false)}
          rounds={gameState.rounds}
        />
      </Stack>
    </Container>
  );
};

export default TruthOrFakeGame;