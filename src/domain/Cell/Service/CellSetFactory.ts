import {
  CELL_BLACK_COLOR_HEX,
  CELL_COLOR,
  CELL_HORIZONTAL_NAME,
  CELL_VERTICAL_NAME,
  CELL_WHITE_COLOR_HEX,
} from '../constants';
import { Cell } from '../Model/Cell';
import { CellColor } from '../Model/CellColor';

export class CellSetFactory {
  private _cells: Cell[] = [];

  constructor(private _number: number) {
    this.fillCells();
  }

  get cells() {
    return this._cells;
  }

  private addCell(cell: Cell) {
    this._cells.push(cell);
  }

  private fillCells(): void {
    const rows = Array(this._number)
      .fill(0)
      .map((_, k) => Object.values(CELL_HORIZONTAL_NAME)[k]);
    const columns = Array(this._number)
      .fill(0)
      .map((_, i) => Object.values(CELL_VERTICAL_NAME)[i])
      .reverse();

    const blackCellColor = new CellColor(CELL_COLOR.BLACK, CELL_BLACK_COLOR_HEX);
    const whiteCellColor = new CellColor(CELL_COLOR.WHITE, CELL_WHITE_COLOR_HEX);
    let isBlack = false;

    columns.forEach(column => {
      rows.forEach(row => {
        const cellColor = isBlack ? blackCellColor : whiteCellColor;
        const cell = new Cell(row, column, cellColor);
        this.addCell(cell);
        isBlack = !isBlack;
      });
      isBlack = !isBlack;
    });
  }
}
