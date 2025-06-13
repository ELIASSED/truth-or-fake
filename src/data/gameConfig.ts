export const GAME_CONFIG = {
    INITIAL_SCORE: 10,
    WIN_SCORE: 20,
    LOSE_SCORE: 0,
    POINTS_PER_CORRECT: 1,
    POINTS_PER_INCORRECT: -1,
    MAX_HISTORY_ROUNDS: 10,
    NOTIFICATION_DURATION: 2000,
    NEXT_ROUND_DELAY: 1500,
    API_URL: 'https://api.adviceslip.com/advice'
  } as const;