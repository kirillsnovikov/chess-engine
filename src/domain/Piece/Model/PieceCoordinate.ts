import { Coordinate } from '../types';

export class PieceCoordinate {
  private _coordinate: Coordinate;

  constructor(coordinate: Coordinate) {
    this._coordinate = coordinate;
  }

  get coordinate() {
    return this._coordinate;
  }

  changeCoordinate(coordinate: Coordinate): PieceCoordinate {
    return new PieceCoordinate(coordinate);
  }
}
