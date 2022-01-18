import './App.scss';

import React from 'react';
import { ChessBoard } from './domain/Board/Model/ChessBoard';

function App() {
  const squares = new ChessBoard().squares;

  return (
    <div className="App">
      <h1>Chess</h1>
      {squares.map(square => (
        <div key={square.cellId.value} style={{ backgroundColor: square.pieceHexColor }}>
          {square.pieceType?.value}
        </div>
      ))}
    </div>
  );
}

export default App;
