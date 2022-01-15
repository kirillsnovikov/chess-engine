import './App.scss';

import React from 'react';
import { PlacePiecesOnBoard } from './domain/Board/Service/PlacePiecesOnBoard';
import { Square } from './domain/Board/Model/Square';
import { CELL_COLOR, CELL_WHITE_COLOR_HEX } from './domain/Cell/constants';
import { Cell } from './domain/Cell/Model/Cell';
import { CellColor } from './domain/Cell/Model/CellColor';
import { CellId } from './domain/Cell/Model/CellId';
import { ChessBoard } from './domain/Board/Model/ChessBoard';
import { PieceCoordinate } from './domain/Piece/Model/PieceCoordinate';
import { Rook } from './domain/Piece/Pieces';
import { PieceColor } from './domain/Piece/Model/PieceColor';
import { PIECE_BLACK_COLOR_HEX, PIECE_COLOR } from './domain/Piece/constants';

console.log(
  new Square(
    new Cell(
      new CellId('e1'),
      new CellColor(CELL_COLOR.WHITE, CELL_WHITE_COLOR_HEX),
    ),
    new Rook(
      new PieceCoordinate(ChessBoard.findCellById('a1').id),
      new PieceColor(PIECE_COLOR.BLACK, PIECE_BLACK_COLOR_HEX),
    ),
  ),
  'square',
);

function App() {
  return (
    <div className="App">
      <h1>Chess</h1>
    </div>
  );
}

export default App;
