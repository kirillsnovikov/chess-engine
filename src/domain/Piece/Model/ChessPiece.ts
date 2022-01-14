import { PieceId } from './PieceId';
import { PieceColor } from './PieceColor';
import { ChessPieceType } from './ChessPieceType';
import { PieceCoordinate } from './PieceCoordinate';
import { Coordinate } from '../types';

export class ChessPiece {
  private _id: PieceId;

  private _title: ChessPieceType;

  private _color: PieceColor;

  private _coordinate: PieceCoordinate;

  constructor(
    pieceId: PieceId,
    title: ChessPieceType,
    color: PieceColor,
    coordinate: PieceCoordinate,
  ) {
    this._id = pieceId;
    this._title = title;
    this._color = color;
    this._coordinate = coordinate;
  }

  get id() {
    return this._id.value;
  }

  get title() {
    return this._title;
  }

  get colorHexValue() {
    return this._color.hexValue;
  }

  get coordinateValue() {
    return this._coordinate.coordinate;
  }

  moveTo(to: Coordinate) {
    this._coordinate = this._coordinate.changeCoordinate(to);
  }
}
