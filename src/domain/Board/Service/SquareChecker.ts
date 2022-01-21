import isNil from 'lodash/isNil';
import { Id } from '../../Cell/types';
import { CHESS_PIECE_TYPE, PIECE_COLOR } from '../../Piece/constants';
import { Square } from '../Model/Square';
import { SquareIdChecker } from './SquareIdChecker';

type CheckRule = (currentSquare: Square, nextSquare: Square) => boolean;

export class SquareChecker {
  private _idChecker: SquareIdChecker;

  constructor(private _squares: Square[], private _checkedSquare: Square) {
    this._idChecker = new SquareIdChecker();
    this.onlyEmptyRule = this.onlyEmptyRule.bind(this);
    this.withEnemyPieceRule = this.withEnemyPieceRule.bind(this);
    this.onlyEnemyRule = this.onlyEnemyRule.bind(this);
  }

  public checkSquares(): Square[] {
    if (!this._checkedSquare.piece) {
      return [];
    }
    switch (this._checkedSquare.piece.type.value) {
      case CHESS_PIECE_TYPE.BISHOP: {
        return this.getBishopAvailableSquares(this._checkedSquare);
      }
      case CHESS_PIECE_TYPE.KING: {
        return this.getKingAvailableSquares(this._checkedSquare);
      }
      case CHESS_PIECE_TYPE.KNIGHT: {
        return this.getKnightAvailableSquares(this._checkedSquare);
      }
      case CHESS_PIECE_TYPE.PAWN: {
        return this.getPawnAvailableSquares(this._checkedSquare);
      }
      case CHESS_PIECE_TYPE.QUEEN: {
        return this.getQueenAvailableSquares(this._checkedSquare);
      }
      case CHESS_PIECE_TYPE.ROOK: {
        return this.getRookAvailableSquares(this._checkedSquare);
      }
      default: {
        return [];
      }
    }
  }

  private getBishopAvailableSquares(currentSquare: Square): Square[] {
    return [
      ...this.getLeftDiaginalSquares(currentSquare),
      ...this.getRightDiagonalSquares(currentSquare),
    ];
  }

  private getKingAvailableSquares(currentSquare: Square): Square[] {
    return [
      ...this.getVerticalSquares(currentSquare, 1),
      ...this.getHorizontalSquares(currentSquare, 1),
      ...this.getLeftDiaginalSquares(currentSquare, 1),
      ...this.getRightDiagonalSquares(currentSquare, 1),
    ];
  }

  private getKnightAvailableSquares(currentSquare: Square): Square[] {
    return this._idChecker.getKnightIds(currentSquare).map(id => this.squareById(id)) as Square[];
  }

  private getPawnAvailableSquares(currentSquare: Square): Square[] {
    const count = currentSquare.piece?.isMoved ? 1 : 2;
    const isWhite = currentSquare.piece?.color === PIECE_COLOR.WHITE;
    const baseSquares = isWhite
      ? this.getUpSquares(currentSquare, this.onlyEmptyRule, count)
      : this.getDownSquares(currentSquare, this.onlyEmptyRule, count);
    const eatSquares = isWhite
      ? [
          ...this.getSquaresRecursively(currentSquare, this.getUpLeftSquare, this.onlyEnemyRule, 1),
          ...this.getSquaresRecursively(
            currentSquare,
            this.getUpRightSquare,
            this.onlyEnemyRule,
            1,
          ),
        ]
      : [
          ...this.getSquaresRecursively(
            currentSquare,
            this.getDownLeftSquare,
            this.onlyEnemyRule,
            1,
          ),
          ...this.getSquaresRecursively(
            currentSquare,
            this.getDownRightSquare,
            this.onlyEnemyRule,
            1,
          ),
        ];

    return [...baseSquares, ...eatSquares];
  }

  private getQueenAvailableSquares(currentSquare: Square): Square[] {
    return [
      ...this.getVerticalSquares(currentSquare),
      ...this.getHorizontalSquares(currentSquare),
      ...this.getLeftDiaginalSquares(currentSquare),
      ...this.getRightDiagonalSquares(currentSquare),
    ];
  }

  private getRookAvailableSquares(currentSquare: Square): Square[] {
    return [...this.getVerticalSquares(currentSquare), ...this.getHorizontalSquares(currentSquare)];
  }

  private getUpSquare = (currentSquare: Square): Square | undefined => {
    return this.squareById(this._idChecker.getUpId(currentSquare));
  };

  private getDownSquare = (currentSquare: Square): Square | undefined => {
    return this.squareById(this._idChecker.getDownId(currentSquare));
  };

  private getRightSquare = (currentSquare: Square): Square | undefined => {
    return this.squareById(this._idChecker.getRightId(currentSquare));
  };

  private getLeftSquare = (currentSquare: Square): Square | undefined => {
    return this.squareById(this._idChecker.getLeftId(currentSquare));
  };

  private getUpRightSquare = (currentSquare: Square): Square | undefined => {
    return this.squareById(this._idChecker.getUpRightId(currentSquare));
  };

  private getUpLeftSquare = (currentSquare: Square): Square | undefined => {
    return this.squareById(this._idChecker.getUpLeftId(currentSquare));
  };

  private getDownRightSquare = (currentSquare: Square): Square | undefined => {
    return this.squareById(this._idChecker.getDownRightId(currentSquare));
  };

  private getDownLeftSquare = (currentSquare: Square): Square | undefined => {
    return this.squareById(this._idChecker.getDownLeftId(currentSquare));
  };

  private getVerticalSquares(currentSquare: Square, count?: number): Square[] {
    return [
      ...this.getUpSquares(currentSquare, this.withEnemyPieceRule, count),
      ...this.getDownSquares(currentSquare, this.withEnemyPieceRule, count),
    ];
  }

  private getHorizontalSquares(currentSquare: Square, count?: number): Square[] {
    return [
      ...this.getRightSquares(currentSquare, this.withEnemyPieceRule, count),
      ...this.getLeftSquares(currentSquare, this.withEnemyPieceRule, count),
    ];
  }

  private getUpSquares(currentSquare: Square, stopRule: CheckRule, count?: number): Square[] {
    return this.getSquaresRecursively(currentSquare, this.getUpSquare, stopRule, count);
  }

  private getDownSquares(currentSquare: Square, stopRule: CheckRule, count?: number): Square[] {
    return this.getSquaresRecursively(currentSquare, this.getDownSquare, stopRule, count);
  }

  private getRightSquares(currentSquare: Square, stopRule: CheckRule, count?: number): Square[] {
    return this.getSquaresRecursively(currentSquare, this.getRightSquare, stopRule, count);
  }

  private getLeftSquares(currentSquare: Square, stopRule: CheckRule, count?: number): Square[] {
    return this.getSquaresRecursively(currentSquare, this.getLeftSquare, stopRule, count);
  }

  private getLeftDiaginalSquares(currentSquare: Square, count?: number): Square[] {
    return [
      ...this.getUpLeftSquares(currentSquare, this.withEnemyPieceRule, count),
      ...this.getDownRightSquares(currentSquare, this.withEnemyPieceRule, count),
    ];
  }

  private getRightDiagonalSquares(currentSquare: Square, count?: number): Square[] {
    return [
      ...this.getUpRightSquares(currentSquare, this.withEnemyPieceRule, count),
      ...this.getDownLeftSquares(currentSquare, this.withEnemyPieceRule, count),
    ];
  }

  private getUpLeftSquares(currentSquare: Square, stopRule: CheckRule, count?: number): Square[] {
    return this.getSquaresRecursively(currentSquare, this.getUpLeftSquare, stopRule, count);
  }

  private getDownRightSquares(
    currentSquare: Square,
    stopRule: CheckRule,
    count?: number,
  ): Square[] {
    return this.getSquaresRecursively(currentSquare, this.getDownRightSquare, stopRule, count);
  }

  private getUpRightSquares(currentSquare: Square, stopRule: CheckRule, count?: number): Square[] {
    return this.getSquaresRecursively(currentSquare, this.getUpRightSquare, stopRule, count);
  }

  private getDownLeftSquares(currentSquare: Square, stopRule: CheckRule, count?: number): Square[] {
    return this.getSquaresRecursively(currentSquare, this.getDownLeftSquare, stopRule, count);
  }

  private squareById(id: Id | undefined): Square | undefined {
    return this._squares.find(square => square.cellId.value === id);
  }

  private getSquaresRecursively(
    currentSquare: Square,
    direction: (currentSquare: Square) => Square | undefined,
    stopRule: CheckRule,
    count?: number,
  ): Square[] {
    const nextSquare = direction(currentSquare);

    if (isNil(nextSquare) || stopRule(currentSquare, nextSquare) || count === 0) {
      return [];
    }

    const dec = isNil(count) ? count : count - 1;

    return [nextSquare, ...this.getSquaresRecursively(nextSquare, direction, stopRule, dec)];
  }

  private isEmpty(square: Square): boolean {
    return square.isEmpty;
  }

  private isEnemy(square: Square): boolean {
    return this._checkedSquare.piece?.color !== square.piece?.color;
  }

  private onlyEmptyRule(_: Square, nextSquare: Square) {
    return !this.isEmpty(nextSquare);
  }

  private withEnemyPieceRule(currentSquare: Square, nextSquare: Square) {
    return (
      (!this.isEmpty(currentSquare) && this.isEnemy(currentSquare)) ||
      (!this.isEmpty(nextSquare) && !this.isEnemy(nextSquare))
    );
  }

  private onlyEnemyRule(_: Square, nextSquare: Square) {
    return this.isEmpty(nextSquare) || (!this.isEmpty(nextSquare) && !this.isEnemy(nextSquare));
  }
}
