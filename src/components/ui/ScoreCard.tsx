import { Card, Group, Badge, Progress, Text, ActionIcon } from '@mantine/core';
import { IconHistory } from '@tabler/icons-react';
import { GameUtils } from '../../utils/gameUtils';
import { GAME_CONFIG } from '../../data/gameConfig';
import { ScoreCardProps } from '../../types';

export const ScoreCard = ({ score, hasHistory, onShowHistory }: ScoreCardProps) => {
  const progressColor = GameUtils.getProgressColor(score);

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group justify="space-between" mb="md">
        <Badge size="xl" variant="filled" color={progressColor}>
          Score: {score}/{GAME_CONFIG.WIN_SCORE}
        </Badge>
        <ActionIcon
          variant="light"
          size="lg"
          onClick={onShowHistory}
          disabled={!hasHistory}
        >
          <IconHistory size={20} />
        </ActionIcon>
      </Group>
      <Progress
        value={(score / GAME_CONFIG.WIN_SCORE) * 100}
        size="xl"
        radius="xl"
        color={progressColor}
        animated
      />
      <Group justify="space-between" mt="xs">
        <Text size="sm" c="red">{GAME_CONFIG.LOSE_SCORE} (Défaite)</Text>
        <Text size="sm" c="green">{GAME_CONFIG.WIN_SCORE} (Victoire)</Text>
      </Group>
    </Card>
  );
};