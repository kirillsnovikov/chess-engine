import { Square } from '../Model/Square';
import { CELL_HORIZONTAL_NAME, CELL_VERTICAL_NAME } from '../../Cell/constants';
import { Id } from '../../Cell/types';
import { isNil } from 'lodash';

const test = 1;
console.log('dfsdfsdf');

export class SquareIdChecker {
  public getUpId = (currentSquare: Square): Id | undefined => {
    const verticalName = this.getNextVerticalName(currentSquare.verticalName);

    if (!verticalName) {
      return undefined;
    }

    return `${currentSquare.horizontalName}${verticalName}`;
  };

  public getDownId(currentSquare: Square): Id | undefined {
    const verticalName = this.getPreviousVerticalName(currentSquare.verticalName);

    if (!verticalName) {
      return undefined;
    }

    return `${currentSquare.horizontalName}${verticalName}`;
  }

  public getRightId(currentSquare: Square): Id | undefined {
    const horizontalName = this.getNextHorizontalName(currentSquare.horizontalName);

    if (!horizontalName) {
      return undefined;
    }

    return `${horizontalName}${currentSquare.verticalName}`;
  }

  public getLeftId(currentSquare: Square): Id | undefined {
    const horizontalName = this.getPreviousHorizontalName(currentSquare.horizontalName);

    if (!horizontalName) {
      return undefined;
    }

    return `${horizontalName}${currentSquare.verticalName}`;
  }

  public getUpRightId(currentSquare: Square, up = 1, right = 1): Id | undefined {
    const verticalName = this.getNextVerticalName(currentSquare.verticalName, up);
    const horizontalName = this.getNextHorizontalName(currentSquare.horizontalName, right);

    return !!horizontalName && !!verticalName ? `${horizontalName}${verticalName}` : undefined;
  }

  public getUpLeftId(currentSquare: Square, up = 1, left = 1): Id | undefined {
    const verticalName = this.getNextVerticalName(currentSquare.verticalName, up);
    const horizontalName = this.getPreviousHorizontalName(currentSquare.horizontalName, left);

    return !!horizontalName && !!verticalName ? `${horizontalName}${verticalName}` : undefined;
  }

  public getDownRightId(currentSquare: Square, down = 1, right = 1): Id | undefined {
    const verticalName = this.getPreviousVerticalName(currentSquare.verticalName, down);
    const horizontalName = this.getNextHorizontalName(currentSquare.horizontalName, right);

    return !!horizontalName && !!verticalName ? `${horizontalName}${verticalName}` : undefined;
  }

  public getDownLeftId(currentSquare: Square, down = 1, left = 1): Id | undefined {
    const verticalName = this.getPreviousVerticalName(currentSquare.verticalName, down);
    const horizontalName = this.getPreviousHorizontalName(currentSquare.horizontalName, left);

    return !!horizontalName && !!verticalName ? `${horizontalName}${verticalName}` : undefined;
  }

  public getKnightIds(currentSquare: Square): Id[] {
    return [
      this.getUpRightId(currentSquare, 2),
      this.getUpRightId(currentSquare, 1, 2),
      this.getUpLeftId(currentSquare, 2),
      this.getUpLeftId(currentSquare, 1, 2),
      this.getDownRightId(currentSquare, 2),
      this.getDownRightId(currentSquare, 1, 2),
      this.getDownLeftId(currentSquare, 2),
      this.getDownLeftId(currentSquare, 1, 2),
    ].filter(id => !isNil(id)) as Id[];
  }

  private getPreviousHorizontalName(
    horizontalName: CELL_HORIZONTAL_NAME,
    indent = 1,
  ): CELL_HORIZONTAL_NAME | undefined {
    const values = Object.values(CELL_HORIZONTAL_NAME);
    const index = values.indexOf(horizontalName);
    return values[index - indent];
  }

  private getPreviousVerticalName(
    verticalName: CELL_VERTICAL_NAME,
    indent = 1,
  ): CELL_VERTICAL_NAME | undefined {
    const values = Object.values(CELL_VERTICAL_NAME);
    const index = values.indexOf(verticalName);
    return values[index - indent];
  }

  private getNextHorizontalName(
    horizontalName: CELL_HORIZONTAL_NAME,
    indent = 1,
  ): CELL_HORIZONTAL_NAME | undefined {
    const values = Object.values(CELL_HORIZONTAL_NAME);
    const index = values.indexOf(horizontalName);
    return values[index + indent];
  }

  private getNextVerticalName(
    verticalName: CELL_VERTICAL_NAME,
    indent = 1,
  ): CELL_VERTICAL_NAME | undefined {
    const values = Object.values(CELL_VERTICAL_NAME);
    const index = values.indexOf(verticalName);
    return values[index + indent];
  }
}
