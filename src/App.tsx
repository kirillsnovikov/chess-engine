import './App.scss';

import React from 'react';
import { ChessBoard } from './domain/Board/Model/ChessBoard';

console.log(new ChessBoard().squares);

function App() {
  return (
    <div className="App">
      <h1>Chess</h1>
    </div>
  );
}

export default App;
