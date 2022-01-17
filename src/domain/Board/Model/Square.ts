import { Cell } from '../../Cell/Model/Cell';
import { ChessPiece } from '../../Piece/Model/ChessPiece';

export class Square {
  private _cell: Cell;

  private _piece?: ChessPiece;

  private _availableSquares: Square[];

  constructor(cell: Cell, piece?: ChessPiece) {
    this._cell = cell;
    this._piece = piece;
    this._availableSquares = [];
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

  public get cell() {
    return this._cell;
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

  public get availableCells() {
    return this._availableSquares;
  }

  public set availableCells(cells: Square[]) {
    this._availableSquares = cells;
  }

  public get isEmpty(): boolean {
    return !Boolean(this._piece);
  }
}
