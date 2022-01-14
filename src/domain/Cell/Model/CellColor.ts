import { CELL_COLOR } from "../constants";
import { Color } from "../types";

export class CellColor {
  constructor(private _color: CELL_COLOR, private _hex: Color) {}

  get color() {
    return this._color;
  }

  get hexValue() {
    return this._hex;
  }

  get rgbValue(): number[] {
    //   convert hex to rgb
    return [];
  }
}
