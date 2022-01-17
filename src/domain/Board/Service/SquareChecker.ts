import { CELL_HORIZONTAL_NAME, CELL_VERTICAL_NAME } from '../../Cell/constants';
import { Id } from '../../Cell/types';
import { Square } from '../Model/Square';

export class SquareChecker {
  constructor(private _squares: Square[]) {}

  public getAvailableSquares(currentSquare: Square): Square[] {
    const squares: Square[] = [];

    const availableSquare = this.getUpSquare(currentSquare);

    if (!!availableSquare) {
      squares.push(availableSquare);
    }
    return squares;
  }

  public getUpSquare(currentSquare: Square) {
    const verticalName = this.getNextVerticalName(currentSquare.verticalName);

    if (!verticalName) {
      return undefined;
    }

    return this.squareById(`${currentSquare.horizontalName}${verticalName}`);
  }

  public getDownSquare(currentSquare: Square): Square | undefined {
    const verticalName = this.getPreviousVerticalName(
      currentSquare.verticalName,
    );

    if (!verticalName) {
      return undefined;
    }

    return this.squareById(`${currentSquare.horizontalName}${verticalName}`);
  }

  public getRightSquare(currentSquare: Square): Square | undefined {
    const horizontalName = this.getNextHorizontalName(
      currentSquare.horizontalName,
    );

    if (!horizontalName) {
      return undefined;
    }

    return this.squareById(`${horizontalName}${currentSquare.verticalName}`);
  }

  public getLeftSquare(currentSquare: Square): Square | undefined {
    const horizontalName = this.getPreviousHorizontalName(
      currentSquare.horizontalName,
    );

    if (!horizontalName) {
      return undefined;
    }

    return this.squareById(`${horizontalName}${currentSquare.verticalName}`);
  }

  public getUpRightSquare(currentSquare: Square): Square | undefined {
    const verticalName = this.getNextVerticalName(currentSquare.verticalName);
    const horizontalName = this.getNextHorizontalName(
      currentSquare.horizontalName,
    );

    if (!(horizontalName && verticalName)) {
      return undefined;
    }

    return this.squareById(`${horizontalName}${verticalName}`);
  }

  private squareById(id: Id): Square | undefined {
    return this._squares.find(square => square.cellId.value === id);
  }

  private getPreviousHorizontalName(
    horizontalName: CELL_HORIZONTAL_NAME,
  ): CELL_HORIZONTAL_NAME | undefined {
    const values = Object.values(CELL_HORIZONTAL_NAME);
    const index = values.indexOf(horizontalName);
    return values[index - 1];
  }

  private getPreviousVerticalName(
    verticalName: CELL_VERTICAL_NAME,
  ): CELL_VERTICAL_NAME | undefined {
    const values = Object.values(CELL_VERTICAL_NAME);
    const index = values.indexOf(verticalName);
    return values[index - 1];
  }

  private getNextHorizontalName(
    horizontalName: CELL_HORIZONTAL_NAME,
  ): CELL_HORIZONTAL_NAME | undefined {
    const values = Object.values(CELL_HORIZONTAL_NAME);
    const index = values.indexOf(horizontalName);
    return values[index + 1];
  }

  private getNextVerticalName(
    verticalName: CELL_VERTICAL_NAME,
  ): CELL_VERTICAL_NAME | undefined {
    const values = Object.values(CELL_VERTICAL_NAME);
    const index = values.indexOf(verticalName);
    return values[index + 1];
  }
}
