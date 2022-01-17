import { PieceColor } from './PieceColor';
import { ChessPieceType } from './ChessPieceType';

export class ChessPiece {
  private _type: ChessPieceType;

  private _color: PieceColor;

  private _isMoved: boolean;

  constructor(type: ChessPieceType, color: PieceColor) {
    this._type = type;
    this._color = color;
    this._isMoved = false;
  }

  get type() {
    return this._type;
  }

  get colorHexValue() {
    return this._color.hexValue;
  }

  get isMoved() {
    return this._isMoved;
  }

  set isMoved(isMoved: boolean) {
    this._isMoved = isMoved;
  }
}
