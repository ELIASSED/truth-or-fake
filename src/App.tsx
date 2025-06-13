import React from 'react';
import TruthOrFakeGame from './components/TruthOrFakeGame';
import { MantineProvider } from '@mantine/core';

function App() {
  return <React.StrictMode>
  <MantineProvider>
    <TruthOrFakeGame />
  </MantineProvider>
</React.StrictMode>;
}

export default App;