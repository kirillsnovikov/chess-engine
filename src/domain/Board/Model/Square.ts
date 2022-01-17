import { Cell } from '../../Cell/Model/Cell';
import { ChessPiece } from '../../Piece/Model/ChessPiece';
import { Coordinate } from '../../Piece/types';

export class Square {
  private _cell: Cell;

  private _piece?: ChessPiece;

  constructor(cell: Cell, piece?: ChessPiece) {
    this._cell = cell;
    this._piece = piece;
  }

  public get square() {
    return {
      cell: this._cell,
      piece: this._piece,
    };
  }

  public get cellId() {
    return this._cell.id;
  }

  public get horizontalName() {
    return this._cell.horizontalName;
  }

  public get verticalName() {
    return this._cell.verticalName;
  }

  public get pieceColor() {
    return this._piece?.colorHexValue;
  }

  public setAvailableCoordinates(coordinates: Coordinate[]) {
    this._piece?.setAvailableCoordinates(coordinates);
  }

  public get isEmpty(): boolean {
    return !Boolean(this._piece);
  }
}
