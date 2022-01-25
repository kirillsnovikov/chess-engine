import { Cell } from '../../Cell/Model/Cell';
import { PIECE_COLOR } from '../../Piece/constants';
import { ChessPiece } from '../../Piece/Model/ChessPiece';
import { ChessPieceType } from '../../Piece/Model/ChessPieceType';
import { Color } from '../../Piece/types';

export class Square {
  private _cell: Cell;

  private _piece?: ChessPiece;

  private _availableSquares: Square[];

  private _isChecked: boolean;

  constructor(cell: Cell, piece?: ChessPiece) {
    this._cell = cell;
    this._piece = piece;
    this._availableSquares = [];
    this._isChecked = false;
  }

  public get square() {
    return {
      cell: this._cell,
      piece: this._piece,
    };
  }

  public get piece() {
    return this._piece;
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

  public get cellHexColor() {
    return this._cell.colorHexValue;
  }

  public get pieceColor(): PIECE_COLOR {
    return this._piece?.color as PIECE_COLOR;
  }

  public get pieceHexColor(): Color {
    return this._piece?.colorHexValue as Color;
  }

  public get pieceType(): ChessPieceType {
    return this._piece?.type as ChessPieceType;
  }

  public get pieceIsMoved(): boolean {
    return this._piece?.isMoved as boolean;
  }

  public get availableSquares() {
    return this._availableSquares;
  }

  public set availableSquares(cells: Square[]) {
    this._availableSquares = cells;
  }

  public get isChecked() {
    return this._isChecked;
  }

  public set isChecked(checked: boolean) {
    this._isChecked = checked;
  }

  public get isEmpty(): boolean {
    return !Boolean(this._piece);
  }

  public removePiece() {
    this._piece = undefined;
    this.availableSquares = [];
  }

  public addPiece(piece: ChessPiece) {
    this._piece = piece;
  }
}
