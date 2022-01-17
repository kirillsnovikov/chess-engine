import { ChessCellSet } from '../../Cell/Service/ChessCellSet';
import { ChessPieceSet } from '../../Piece/Service/ChessPieceSet';
import { ChessBoard } from '../Model/ChessBoard';
import { Square } from '../Model/Square';

export class PlacePiecesOnBoard {
  private _cells = ChessCellSet.cells;

  private _pieces = ChessPieceSet.pieces;

  public run(): Square[] {
    return this._cells.map(cell => {
      return new Square(
        cell,
        this._pieces.find(piece => piece.id === cell.id.value),
      );
    });
  }
}
