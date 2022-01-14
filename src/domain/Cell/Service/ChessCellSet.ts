import { Cell } from '../Model/Cell';
import { CellSetFactory } from './CellSetFactory';

export class ChessCellSet {
  private _numberCell = 8;

  private _set: Cell[];

  constructor() {
    this._set = new CellSetFactory(this._numberCell).cells;
  }

  public get set() {
    return this._set;
  }

  public reset(): void {
    this._set = new CellSetFactory(this._numberCell).cells;
  }
}
