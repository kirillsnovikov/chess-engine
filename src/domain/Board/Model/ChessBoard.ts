import { SquareChecker } from '../Service/SquareChecker';
import { SquareSet } from '../Service/SquareSet';
import { Square } from './Square';

export class ChessBoard {
  private _squares: Square[];

  constructor() {
    this._squares = SquareSet.squares;
    this.getAvailableSquares = this.getAvailableSquares.bind(this);
  }

  public get squares() {
    return this._squares;
  }

  public getAvailableSquares(currentSquare: Square): Square[] {
    const availableSquares = new SquareChecker(this._squares, currentSquare).checkSquares();
    currentSquare.availableSquares = availableSquares;
    return availableSquares;
  }

  public move(from: Square, to: Square): boolean {
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
      return true;
    }

    return false;
  }
}
