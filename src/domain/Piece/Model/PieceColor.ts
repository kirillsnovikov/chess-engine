import { PIECE_COLOR } from '../constants';
import { Color } from '../types';

export class PieceColor {
  constructor(private _color: PIECE_COLOR, private _hex: Color) {}

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
