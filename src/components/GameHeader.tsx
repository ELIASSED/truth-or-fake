import { Title, Text } from '@mantine/core';

export const GameHeader = () => (
  <div style={{ textAlign: 'center' }}>
    <Title order={1} mb="sm" style={{ color: '#228be6' }}>
      🎯 Truth or Fake
    </Title>
    <Text size="lg" c="dimmed">
      Devinez si le conseil vient de l'API ou s'il est inventé !
    </Text>
  </div>
);