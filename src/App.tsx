import './App.scss';

import React from 'react';
import { PlacePiecesOnBoard } from './domain/Board/Service/PlacePiecesOnBoard';

console.log(new PlacePiecesOnBoard().run());

function App() {
  return (
    <div className="App">
      <h1>Chess</h1>
    </div>
  );
}

export default App;
