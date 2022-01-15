import { CELL_COLOR, CELL_WHITE_COLOR_HEX } from '../../Cell/constants';
import { Cell } from '../../Cell/Model/Cell';
import { CellColor } from '../../Cell/Model/CellColor';
import { CellId } from '../../Cell/Model/CellId';
import { ChessPiece } from '../../Piece/Model/ChessPiece';

export class Square {
  private _cell: Cell;

  private _piece: ChessPiece | undefined;

  constructor(cell: Cell, piece: ChessPiece | undefined) {
    this._cell = cell;
    this._piece = piece;
  }

  get square() {
    return {
      cell: this._cell,
      piece: this._piece,
    };
  }

  public get pieceColor() {
    return this._piece?.colorHexValue;
  }

  private get avaliablePieceCoordinates() {
    // TODO
    return [];
  }

  public get isEmpty(): boolean {
    return !Boolean(this._piece);
  }
}
