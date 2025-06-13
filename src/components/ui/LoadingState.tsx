import { Center, Stack, Loader, Text } from '@mantine/core';

export const LoadingState = () => (
  <Center style={{ height: '200px' }}>
    <Stack align="center" gap="md">
      <Loader size="lg" variant="dots" />
      <Text>Chargement d'un nouveau conseil...</Text>
    </Stack>
  </Center>
);