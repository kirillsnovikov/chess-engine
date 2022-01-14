import { PieceColor } from './PieceColor';
import { PieceId } from './PieceId';

export class Piece {
  private _id: PieceId;

  private _color: PieceColor;

  constructor(pieceId: PieceId, color: PieceColor) {
    this._id = pieceId;
    this._color = color;
  }

  get id() {
    return this._id.value;
  }

  get colorHexValue() {
    return this._color.hexValue;
  }
}
