import { CELL_HORIZONTAL_NAME, CELL_VERTICAL_NAME } from '../constants';
import { CellColor } from './CellColor';
import { CellId } from './CellId';

export class Cell {
  private _horizontalName: CELL_HORIZONTAL_NAME;

  private _verticalName: CELL_VERTICAL_NAME;

  private _color: CellColor;

  constructor(
    horizontalName: CELL_HORIZONTAL_NAME,
    verticalName: CELL_VERTICAL_NAME,
    cellColor: CellColor,
  ) {
    this._horizontalName = horizontalName;
    this._verticalName = verticalName;
    this._color = cellColor;
  }

  get id() {
    return new CellId(`${this._horizontalName}${this._verticalName}`);
  }

  get verticalName() {
    return this._verticalName;
  }

  get horizontalName() {
    return this._horizontalName;
  }

  get colorHexValue() {
    return this._color.hexValue;
  }
}
