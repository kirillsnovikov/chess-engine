import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import { SquareChecker } from '../Service/SquareChecker';
import { SquareSet } from '../Service/SquareSet';
import { Square } from './Square';

export class ChessBoard {
  private _squares: Square[];

  constructor() {
    this._squares = SquareSet.squares;
    this.getAvailableSquares = this.getAvailableSquares.bind(this);
    this.move = this.move.bind(this);
  }

  public get squares() {
    return this._squares;
  }

  public getAvailableSquares(currentSquare: Square): Square[] {
    const availableSquares =
      isEmpty(currentSquare.availableSquares) && !currentSquare.isChecked
        ? new SquareChecker(this._squares, currentSquare).checkSquares()
        : currentSquare.availableSquares;
    currentSquare.availableSquares = availableSquares;
    return availableSquares;
  }

  public resetAvailableSquares(): void {
    this._squares.forEach(square => {
      square.isChecked = false;
      if (isEmpty(square.availableSquares)) {
        return;
      }
      square.availableSquares = [];
    });
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
      !isNil(from.piece)
    ) {
      from.piece.isMoved = true;
      to.addPiece(from.piece);
      from.removePiece();
      this.resetAvailableSquares();
      return true;
    }

    return false;
  }
}
