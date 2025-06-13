import { Center, Stack, Title, Text, Button } from '@mantine/core';
import { IconTrophy, IconSkull, IconRefresh } from '@tabler/icons-react';
import { GameOverStateProps } from '../../types';

export const GameOverState = ({ isWin, onRestart }: GameOverStateProps) => (
  <Center style={{ height: '200px' }}>
    <Stack align="center" gap="md">
      {isWin ? (
        <>
          <IconTrophy size={60} color="gold" />
          <Title order={2} c="green">🎉 Félicitations !</Title>
          <Text size="lg" ta="center">
            Vous avez atteint 20 points !<br />
            Vous êtes un expert en détection de conseils !
          </Text>
        </>
      ) : (
        <>
          <IconSkull size={60} color="red" />
          <Title order={2} c="red">💀 Défaite !</Title>
          <Text size="lg" ta="center">
            Vous êtes tombé à 0 point...<br />
            Mais ne vous découragez pas !
          </Text>
        </>
      )}
      <Button
        leftSection={<IconRefresh />}
        size="lg"
        onClick={onRestart}
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan' }}
      >
        Rejouer
      </Button>
    </Stack>
  </Center>
);