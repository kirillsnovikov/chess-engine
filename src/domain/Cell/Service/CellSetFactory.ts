import {
  CELL_BLACK_COLOR_HEX,
  CELL_COLOR,
  CELL_VERTICAL_NAME,
  CELL_WHITE_COLOR_HEX,
} from "../constants";
import { Cell } from "../Model/Cell";
import { CellColor } from "../Model/CellColor";
import { CellId } from "../Model/CellId";

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
      .map((_, k) => k + 1);
    const columns = Array(this._number)
      .fill(0)
      .map((_, i) => Object.values(CELL_VERTICAL_NAME)[i]);

    const blackCellColor = new CellColor(
      CELL_COLOR.BLACK,
      CELL_BLACK_COLOR_HEX
    );
    const whiteCellColor = new CellColor(
      CELL_COLOR.WHITE,
      CELL_WHITE_COLOR_HEX
    );
    let isBlack = true;

    rows.forEach((row) => {
      columns.forEach((column) => {
        const cellId = new CellId(`${column}${row}`);
        const cellColor = isBlack ? blackCellColor : whiteCellColor;
        const cell = new Cell(cellId, cellColor);
        this.addCell(cell);
        isBlack = !isBlack;
      });
    });
  }
}
