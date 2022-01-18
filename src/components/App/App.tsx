import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ChessBoard } from '../../domain/Board/Model/ChessBoard';
import Styles, { lightTheme } from '../../styles';

function App() {
  const squares = new ChessBoard().squares;

  return (
    <ThemeProvider theme={lightTheme}>
      <h1>Chess</h1>
      {squares.map(square => (
        <div key={square.cellId.value} style={{ backgroundColor: square.pieceHexColor }}>
          {square.pieceType?.value}
        </div>
      ))}
      <Styles />
    </ThemeProvider>
  );
}

export default App;
