export interface Advice {
    slip: {
      id: number;
      advice: string;
    };
  }
  
export interface FakeAdvicesData {
    fake_advices: Advice[];
  }

export interface GameRound {
    advice: string;
    adviceId: number
    isReal: boolean;
    playerGuess: boolean | null;
    isCorrect: boolean | null;
    timestamp: Date;
  }

export interface HistoryModalProps {
    opened: boolean;
    onClose: () => void;
    rounds: GameRound[];
  }

export interface GameState {
    score: number;
    isGameOver: boolean;
    isWin: boolean;
    currentAdvice: string;
    currentAdviceId: number;
    isCurrentReal: boolean;
    isLoading: boolean;
    rounds: GameRound[];
  }
  
export interface NotificationState {
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }

export interface AdviceDisplayProps {
    advice: string;
    roundNumber: number;
    onGuess: (guess: boolean) => void;
  }

export interface GameNotificationProps {
    notification: NotificationState;
  }

export interface ScoreCardProps {
    score: number;
    hasHistory: boolean;
    onShowHistory: () => void;
  }
export interface GameOverStateProps {
    isWin: boolean;
    onRestart: () => void;
  }

export interface GameBoardProps {
    gameState: GameState;
    onGuess: (guess: boolean) => void;
    onRestart: () => void;
  }
  
