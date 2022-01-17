import { PieceId } from './PieceId';
import { PieceColor } from './PieceColor';
import { ChessPieceType } from './ChessPieceType';
import { PieceCoordinate } from './PieceCoordinate';
import { Coordinate } from '../types';

export class ChessPiece {
  private _id: PieceId;

  private _type: ChessPieceType;

  private _color: PieceColor;

  private _baseCoordinate: PieceCoordinate;

  private _coordinate: PieceCoordinate;

  private _availableCoordinates: Coordinate[];

  constructor(
    pieceId: PieceId,
    type: ChessPieceType,
    color: PieceColor,
    baseCoordinate: PieceCoordinate,
  ) {
    this._id = pieceId;
    this._type = type;
    this._color = color;
    this._baseCoordinate = baseCoordinate;
    this._coordinate = baseCoordinate;
    this._availableCoordinates = [];
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

  get availableCoordinates() {
    return this._availableCoordinates;
  }

  public setAvailableCoordinates(coordinates: Coordinate[]) {
    this._availableCoordinates = coordinates;
  }

  moveTo(coordinate: Coordinate): boolean {
    if (
      this._availableCoordinates.find(
        availableCoordinte => availableCoordinte === coordinate,
      ) === undefined
    ) {
      console.warn('Недопустимый ход');
      return false;
    }
    this._coordinate = this._coordinate.changeCoordinate(coordinate);
    return true;
  }
}
