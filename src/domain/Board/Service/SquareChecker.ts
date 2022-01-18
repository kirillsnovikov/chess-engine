import isNil from 'lodash/isNil';
import { Id } from '../../Cell/types';
import { CHESS_PIECE_TYPE, PIECE_COLOR } from '../../Piece/constants';
import { Square } from '../Model/Square';
import { SquareNameChecker } from './SquareNameChecker';

export class SquareChecker {
  constructor(private _squares: Square[]) {}

  public checkSquares() {
    this._squares.forEach(square => {
      if (square.isEmpty) {
        return;
      }
      switch (square.pieceType.value) {
        case CHESS_PIECE_TYPE.BISHOP: {
          this.setBishopAvailableSquares(square);
          break;
        }
        case CHESS_PIECE_TYPE.KING: {
          this.setKingAvailableSquares(square);
          break;
        }
        case CHESS_PIECE_TYPE.KNIGHT: {
        }
        case CHESS_PIECE_TYPE.PAWN: {
          this.setPawnAvailableSquares(square);
          break;
        }
        case CHESS_PIECE_TYPE.QUEEN: {
          this.setQueenAvailableSquares(square);
          break;
        }
        case CHESS_PIECE_TYPE.ROOK: {
          this.setRookAvailableSquares(square);
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  private setBishopAvailableSquares(currentSquare: Square) {
    const squares = [
      ...this.getLeftDiaginalSquares(currentSquare),
      ...this.getRightDiagonalSquares(currentSquare),
    ];

    currentSquare.availableSquares = squares;
  }

  private setKingAvailableSquares(currentSquare: Square) {
    const squares = [
      ...this.getVerticalSquares(currentSquare, 1),
      ...this.getHorizontalSquares(currentSquare, 1),
      ...this.getLeftDiaginalSquares(currentSquare, 1),
      ...this.getRightDiagonalSquares(currentSquare, 1),
    ];

    currentSquare.availableSquares = squares;
  }

  private setPawnAvailableSquares(currentSquare: Square) {
    const count = currentSquare.pieceIsMoved ? 1 : 2;
    const squares =
      currentSquare.pieceColor === PIECE_COLOR.WHITE
        ? this.getUpSquares(currentSquare, count)
        : this.getDownSquares(currentSquare, count);

    currentSquare.availableSquares = squares;
  }

  private setQueenAvailableSquares(currentSquare: Square) {
    const squares = [
      ...this.getVerticalSquares(currentSquare),
      ...this.getHorizontalSquares(currentSquare),
      ...this.getLeftDiaginalSquares(currentSquare),
      ...this.getRightDiagonalSquares(currentSquare),
    ];

    currentSquare.availableSquares = squares;
  }

  private setRookAvailableSquares(currentSquare: Square) {
    const squares = [
      ...this.getVerticalSquares(currentSquare),
      ...this.getHorizontalSquares(currentSquare),
    ];

    currentSquare.availableSquares = squares;
  }

  private getUpSquare = (currentSquare: Square): Square | undefined => {
    const verticalName = SquareNameChecker.getNextVerticalName(currentSquare.verticalName);

    if (!verticalName) {
      return undefined;
    }

    return this.squareById(`${currentSquare.horizontalName}${verticalName}`);
  };

  private getDownSquare = (currentSquare: Square): Square | undefined => {
    const verticalName = SquareNameChecker.getPreviousVerticalName(currentSquare.verticalName);

    if (!verticalName) {
      return undefined;
    }

    return this.squareById(`${currentSquare.horizontalName}${verticalName}`);
  };

  private getRightSquare = (currentSquare: Square): Square | undefined => {
    const horizontalName = SquareNameChecker.getNextHorizontalName(currentSquare.horizontalName);

    if (!horizontalName) {
      return undefined;
    }

    return this.squareById(`${horizontalName}${currentSquare.verticalName}`);
  };

  private getLeftSquare = (currentSquare: Square): Square | undefined => {
    const horizontalName = SquareNameChecker.getPreviousHorizontalName(
      currentSquare.horizontalName,
    );

    if (!horizontalName) {
      return undefined;
    }

    return this.squareById(`${horizontalName}${currentSquare.verticalName}`);
  };

  private getUpRightSquare = (currentSquare: Square): Square | undefined => {
    const verticalName = SquareNameChecker.getNextVerticalName(currentSquare.verticalName);
    const horizontalName = SquareNameChecker.getNextHorizontalName(currentSquare.horizontalName);

    if (!(horizontalName && verticalName)) {
      return undefined;
    }

    return this.squareById(`${horizontalName}${verticalName}`);
  };

  private getUpLeftSquare = (currentSquare: Square): Square | undefined => {
    const verticalName = SquareNameChecker.getNextVerticalName(currentSquare.verticalName);
    const horizontalName = SquareNameChecker.getPreviousHorizontalName(
      currentSquare.horizontalName,
    );

    if (!(horizontalName && verticalName)) {
      return undefined;
    }

    return this.squareById(`${horizontalName}${verticalName}`);
  };

  private getDownRightSquare = (currentSquare: Square): Square | undefined => {
    const verticalName = SquareNameChecker.getPreviousVerticalName(currentSquare.verticalName);
    const horizontalName = SquareNameChecker.getNextHorizontalName(currentSquare.horizontalName);

    if (!(horizontalName && verticalName)) {
      return undefined;
    }

    return this.squareById(`${horizontalName}${verticalName}`);
  };

  private getDownLeftSquare = (currentSquare: Square): Square | undefined => {
    const verticalName = SquareNameChecker.getPreviousVerticalName(currentSquare.verticalName);
    const horizontalName = SquareNameChecker.getPreviousHorizontalName(
      currentSquare.horizontalName,
    );

    if (!(horizontalName && verticalName)) {
      return undefined;
    }

    return this.squareById(`${horizontalName}${verticalName}`);
  };

  private getRecursiveSquares(
    currentSquare: Square,
    fn: (currentSquare: Square) => Square | undefined,
    count?: number,
  ): Square[] {
    const nextSquare = fn(currentSquare);

    if (!nextSquare || count === 0) {
      return [];
    } else {
      if (nextSquare.isEmpty) {
        return [
          nextSquare,
          ...this.getRecursiveSquares(nextSquare, fn, !isNil(count) ? count - 1 : count),
        ];
      }

      if (!nextSquare.isEmpty && nextSquare.pieceColor !== currentSquare.pieceColor) {
        return [nextSquare];
      }

      if (!nextSquare.isEmpty && nextSquare.pieceColor === currentSquare.pieceColor) {
        return [];
      }
    }
    return [];
  }

  private getVerticalSquares(currentSquare: Square, count?: number): Square[] {
    return [
      ...this.getUpSquares(currentSquare, count),
      ...this.getDownSquares(currentSquare, count),
    ];
  }

  private getUpSquares(currentSquare: Square, count?: number): Square[] {
    return this.getRecursiveSquares(currentSquare, this.getUpSquare, count);
  }

  private getDownSquares(currentSquare: Square, count?: number): Square[] {
    return this.getRecursiveSquares(currentSquare, this.getDownSquare, count);
  }

  private getHorizontalSquares(currentSquare: Square, count?: number): Square[] {
    return [
      ...this.getRightSquares(currentSquare, count),
      ...this.getLeftSquares(currentSquare, count),
    ];
  }

  private getRightSquares(currentSquare: Square, count?: number): Square[] {
    return this.getRecursiveSquares(currentSquare, this.getRightSquare, count);
  }

  private getLeftSquares(currentSquare: Square, count?: number): Square[] {
    return this.getRecursiveSquares(currentSquare, this.getLeftSquare, count);
  }

  private getLeftDiaginalSquares(currentSquare: Square, count?: number): Square[] {
    return [
      ...this.getUpLeftSquares(currentSquare, count),
      ...this.getDownRightSquares(currentSquare, count),
    ];
  }

  private getRightDiagonalSquares(currentSquare: Square, count?: number): Square[] {
    return [
      ...this.getUpRightSquares(currentSquare, count),
      ...this.getDownLeftSquares(currentSquare, count),
    ];
  }

  private getUpLeftSquares(currentSquare: Square, count?: number): Square[] {
    return this.getRecursiveSquares(currentSquare, this.getUpLeftSquare, count);
  }

  private getUpRightSquares(currentSquare: Square, count?: number): Square[] {
    return this.getRecursiveSquares(currentSquare, this.getUpRightSquare, count);
  }

  private getDownLeftSquares(currentSquare: Square, count?: number): Square[] {
    return this.getRecursiveSquares(currentSquare, this.getDownLeftSquare, count);
  }

  private getDownRightSquares(currentSquare: Square, count?: number): Square[] {
    return this.getRecursiveSquares(currentSquare, this.getDownRightSquare, count);
  }

  private squareById(id: Id): Square | undefined {
    return this._squares.find(square => square.cellId.value === id);
  }
}
