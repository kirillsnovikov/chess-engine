import { ChessCellSet } from '../../Cell/Service/ChessCellSet';
import { ChessPieceSet } from '../../Piece/Service/ChessPieceSet';

export class PlacePiecesOnBoard {
  private _cells = ChessCellSet.cells;

  private _pieces = ChessPieceSet.pieces;

  public run() {
    console.log('cells', this._cells, 'pieces', this._pieces);
  }

  // private
}
