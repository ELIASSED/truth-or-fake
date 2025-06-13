import { useState, useCallback } from 'react';
import { GameState, GameRound, NotificationState } from '../types';
import { GAME_CONFIG } from '../data/gameConfig';
import { AdviceService } from '../utils/adviceService';
import { GameUtils } from '../utils/gameUtils';

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    score: GAME_CONFIG.INITIAL_SCORE,
    isGameOver: false,
    isWin: false,
    currentAdvice: '',
    currentAdviceId: 0,
    isCurrentReal: false,
    isLoading: true,
    rounds: []
  });

  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    type: 'success',
    message: ''
  });

  const generateNewRound = useCallback(async () => {
    setGameState(prev => ({ ...prev, isLoading: true }));
    const isReal = GameUtils.shouldShowRealAdvice();

    try {
      const adviceData = await AdviceService.getAdvice(isReal);
      setGameState(prev => ({
        ...prev,
        currentAdvice: adviceData.slip.advice,
        currentAdviceId: adviceData.slip.id,
        isCurrentReal: isReal,
        isLoading: false
      }));
    } catch (error) {
      console.error('Error generating new round:', error);
      const fallbackAdvice = AdviceService.getFakeAdvice();
      setGameState(prev => ({
        ...prev,
        currentAdvice: fallbackAdvice.slip.advice,
        currentAdviceId: fallbackAdvice.slip.id,
        isCurrentReal: false,
        isLoading: false
      }));
    }
  }, []);

  const handleGuess = useCallback(
    (guess: boolean) => {
      const isCorrect = guess === gameState.isCurrentReal;
      const newScore = GameUtils.calculateNewScore(gameState.score, isCorrect);

      const newRound: GameRound = {
        advice: gameState.currentAdvice,
        adviceId: gameState.currentAdviceId,
        isReal: gameState.isCurrentReal,
        playerGuess: guess,
        isCorrect,
        timestamp: new Date()
      };

      setNotification({
        show: true,
        type: isCorrect ? 'success' : 'error',
        message: isCorrect ? '✅ Correct ! +1 point' : '❌ Incorrect ! -1 point'
      });

      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, GAME_CONFIG.NOTIFICATION_DURATION);

      setGameState(prev => ({
        ...prev,
        score: newScore,
        rounds: [newRound, ...prev.rounds.slice(0, GAME_CONFIG.MAX_HISTORY_ROUNDS - 1)],
        isGameOver: GameUtils.isGameOver(newScore),
        isWin: GameUtils.isWin(newScore)
      }));

      if (!GameUtils.isGameOver(newScore)) {
        setTimeout(() => {
          generateNewRound();
        }, GAME_CONFIG.NEXT_ROUND_DELAY);
      }
    },
    [gameState.currentAdvice, gameState.currentAdviceId, gameState.isCurrentReal, gameState.score, generateNewRound]
  );

  const resetGame = useCallback(() => {
    AdviceService.resetUsedAdvices();
    AdviceService.clearCache();
    setGameState({
      score: GAME_CONFIG.INITIAL_SCORE,
      isGameOver: false,
      isWin: false,
      currentAdvice: '',
      currentAdviceId: 0,
      isCurrentReal: false,
      isLoading: true,
      rounds: []
    });
    generateNewRound();
  }, [generateNewRound]);

  return {
    gameState,
    notification,
    generateNewRound,
    handleGuess,
    resetGame
  };
};