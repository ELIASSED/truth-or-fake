import { Stack, Text, Group, Button, Divider } from '@mantine/core';
import { AdviceDisplayProps } from '../../types';

export const AdviceDisplay = ({ advice, roundNumber, onGuess }: AdviceDisplayProps) => (
  <Stack gap="xl">
    <div style={{ textAlign: 'center' }}>
      <Text size="sm" c="dimmed" mb="md">
        Conseil #{roundNumber}
      </Text>
      <Text
        size="xl"
        fw={500}
        style={{
          fontStyle: 'italic',
          lineHeight: 1.6,
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          border: '2px dashed #dee2e6'
        }}
      >
        "{advice}"
      </Text>
    </div>
    <Divider />
    <div style={{ textAlign: 'center' }}>
      <Text size="lg" fw={500} mb="lg">
        Ce conseil est-il authentique ?
      </Text>
      <Group justify="center" gap="xl">
        <Button

          size="xl"
          color="green"
          onClick={() => onGuess(true)}
          style={{ minWidth: '150px' }}
        >
          ✅ Vrai conseil
        </Button>
        <Button

          size="xl"
          color="red"
          onClick={() => onGuess(false)}
          style={{ minWidth: '150px' }}
        >
          ❌ Faux conseil
        </Button>
      </Group>
    </div>
  </Stack>
);