import { FigureId } from "./FigureId";
import { FigureColor } from "./FigureColor";
import { ChessFigureType } from "./ChessFigureType";

export class ChessFigure {
  private _id: FigureId;
  private _title: ChessFigureType;
  private _color: FigureColor;

  constructor(figureId: FigureId, title: ChessFigureType, color: FigureColor) {
    this._id = figureId;
    this._title = title;
    this._color = color;
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
}
