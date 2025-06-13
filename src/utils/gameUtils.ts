import { GAME_CONFIG } from '../data/gameConfig';

export class GameUtils {
  static shouldShowRealAdvice(): boolean {
    return Math.random() > 0.5;
  }

  static calculateNewScore(currentScore: number, isCorrect: boolean): number {
    return isCorrect
      ? currentScore + GAME_CONFIG.POINTS_PER_CORRECT
      : currentScore + GAME_CONFIG.POINTS_PER_INCORRECT;
  }

  static isGameOver(score: number): boolean {
    return score >= GAME_CONFIG.WIN_SCORE || score <= GAME_CONFIG.LOSE_SCORE;
  }

  static isWin(score: number): boolean {
    return score >= GAME_CONFIG.WIN_SCORE;
  }

  static getProgressColor(score: number): string {
    if (score >= 15) return 'green';
    if (score >= 10) return 'blue';
    if (score >= 5) return 'orange';
    return 'red';
  }

  static truncateText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }

  static formatAdviceId(id: number, isReal: boolean): string {
    return isReal ? `#${id} (API)` : `#${id} (Local)`;
  }

  static getAdviceSource(isReal: boolean): string {
    return isReal ? 'Advice Slip API' : 'Base locale';
  }
}