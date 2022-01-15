import { Cell } from '../Model/Cell';
import { Id } from '../types';
import { CellSetFactory } from './CellSetFactory';

export class ChessCellSet {
  static _numberCell = 8;

  static cells: Cell[] = new CellSetFactory(this._numberCell).cells;

  public static reset(): void {
    ChessCellSet.cells = new CellSetFactory(this._numberCell).cells;
  }

  public static findCellById(id: Id): Cell {
    return ChessCellSet.cells.find(cell => cell.id.value === id) as Cell;
  }
}
