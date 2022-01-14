import { Coordinate } from '../types';

export class FigureCoordinate {
  private _coordinate: Coordinate;

  constructor(coordinate: Coordinate) {
    this._coordinate = coordinate;
  }

  get coordinate() {
    return this._coordinate;
  }

  changeCoordinate(coordinate: Coordinate): Coordinate {
    return new FigureCoordinate(coordinate).coordinate;
  }
}
