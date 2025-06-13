import { Modal, Text, Timeline, Badge, Group } from '@mantine/core';
import { IconCheck, IconX, IconApi, IconDatabase } from '@tabler/icons-react';
import { GameUtils } from '../../utils/gameUtils';
import { HistoryModalProps } from '../../types';


export const HistoryModal = ({ opened, onClose, rounds }: HistoryModalProps) => (
  <Modal opened={opened} onClose={onClose} title="🕒 Historique de la partie" size="lg">
    {rounds.length === 0 ? (
      <Text c="dimmed" ta="center" py="xl">
        Aucun historique disponible pour le moment.
      </Text>
    ) : (
      <Timeline active={-1} bulletSize={24}>
        {rounds.map((round, index) => (
          <Timeline.Item
            key={index}
            bullet={round.isCorrect ? <IconCheck size={12} /> : <IconX size={12} />}
            color={round.isCorrect ? 'green' : 'red'}
            title={
              <Group gap="xs">
                <Text fw={500}>{round.isCorrect ? 'Correct' : 'Incorrect'}</Text>
                <Badge
                  size="sm"
                  color={round.isReal ? 'blue' : 'orange'}
                  leftSection={round.isReal ? <IconApi size={12} /> : <IconDatabase size={12} />}
                >
                  {GameUtils.formatAdviceId(round.adviceId, round.isReal)}
                </Badge>
              </Group>
            }
          >
            <Text size="sm" style={{ fontStyle: 'italic' }} mb="xs">
              "{GameUtils.truncateText(round.advice, 80)}"
            </Text>
            <Group gap="md">
              <Text size="xs" c="dimmed">
                Votre réponse: <strong>{round.playerGuess ? 'Vrai' : 'Faux'}</strong>
              </Text>
              <Text size="xs" c="dimmed">
                Source: {GameUtils.getAdviceSource(round.isReal)}
              </Text>
            </Group>
          </Timeline.Item>
        ))}
      </Timeline>
    )}
  </Modal>
);