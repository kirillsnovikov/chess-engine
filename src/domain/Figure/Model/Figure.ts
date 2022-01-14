import { FigureColor } from './FigureColor';
import { FigureId } from './FigureId';

export class Figure {
  private _id: FigureId;

  private _color: FigureColor;

  constructor(figureId: FigureId, color: FigureColor) {
    this._id = figureId;
    this._color = color;
  }

  get id() {
    return this._id.value;
  }

  get colorHexValue() {
    return this._color.hexValue;
  }
}
