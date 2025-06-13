import { Card } from '@mantine/core';
import { LoadingState } from './ui/LoadingState';
import { GameOverState } from './ui/GameOverState';
import { AdviceDisplay } from './ui/AdviceDisplay';
import { GameBoardProps } from '../types';


export const GameBoard = ({ gameState, onGuess, onRestart }: GameBoardProps) => (
  <Card shadow="md" p="xl" radius="md" withBorder style={{ minHeight: '300px' }}>
    {gameState.isLoading ? (
      <LoadingState />
    ) : gameState.isGameOver ? (
      <GameOverState isWin={gameState.isWin} onRestart={onRestart} />
    ) : (
      <AdviceDisplay
        advice={gameState.currentAdvice}
        roundNumber={gameState.rounds.length + 1}
        onGuess={onGuess}
      />
    )}
  </Card>
);