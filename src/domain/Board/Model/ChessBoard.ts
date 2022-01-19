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

  public move = (from: Square, to: Square): boolean => {
    if (from.isEmpty) {
      console.warn('Недопустимый ход');
      return false;
    }

    if (from.availableSquares.length === 0) {
      console.warn('Нет возможных ходов');
      return false;
    }

    if (
      !!from.availableSquares.find(square => square.cellId.value === to.cellId.value) &&
      !!from.piece
    ) {
      to.addPiece(from.piece);
      from.removePiece();
      this.checkAvailableCoordinates();
      return true;
    }

    return false;
  };
}
