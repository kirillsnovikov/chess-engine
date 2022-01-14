import { CellColor } from "./CellColor";
import { CellId } from "./CellId";

export class Cell {
  private _id: CellId;
  private _color: CellColor;

  constructor(cellId: CellId, cellColor: CellColor) {
    this._id = cellId;
    this._color = cellColor;
  }

  get id() {
    return this._id.value;
  }

  get colorHexValue() {
    return this._color.hexValue;
  }
}
