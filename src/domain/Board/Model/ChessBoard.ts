import { SquareChecker } from '../Service/SquareChecker';
import { SquareSet } from '../Service/SquareSet';
import { Square } from './Square';

export class ChessBoard {
  private _squares: Square[];

  constructor() {
    this._squares = SquareSet.squares;
    this.checkAvailableCoordinates();
  }

  public get squares() {
    return this._squares;
  }

  public checkAvailableCoordinates(): void {
    const checker = new SquareChecker(this._squares);
    checker.checkSquares();
  }
}
