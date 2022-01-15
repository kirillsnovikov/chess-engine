import { PieceId } from './PieceId';
import { PieceColor } from './PieceColor';
import { ChessPieceType } from './ChessPieceType';
import { PieceCoordinate } from './PieceCoordinate';
import { Coordinate } from '../types';

export class ChessPiece {
  private _id: PieceId;

  private _type: ChessPieceType;

  private _color: PieceColor;

  private _coordinate: PieceCoordinate;

  private _avaliableCoordinates: PieceCoordinate[] = [];

  constructor(
    pieceId: PieceId,
    type: ChessPieceType,
    color: PieceColor,
    coordinate: PieceCoordinate,
  ) {
    this._id = pieceId;
    this._type = type;
    this._color = color;
    this._coordinate = coordinate;
  }

  get id() {
    return this._id.value;
  }

  get type() {
    return this._type;
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
