import React from 'react';
import { ThemeProvider } from 'styled-components';
import Styles, { lightTheme } from '../../styles';
import { Board } from '../Board/Board';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <h1>Chess</h1>
      <Board />
      <Styles />
    </ThemeProvider>
  );
}

export default App;
