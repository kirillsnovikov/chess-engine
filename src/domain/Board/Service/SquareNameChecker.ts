import { CELL_HORIZONTAL_NAME, CELL_VERTICAL_NAME } from '../../Cell/constants';

export class SquareNameChecker {
  static getPreviousHorizontalName(
    horizontalName: CELL_HORIZONTAL_NAME,
  ): CELL_HORIZONTAL_NAME | undefined {
    const values = Object.values(CELL_HORIZONTAL_NAME);
    const index = values.indexOf(horizontalName);
    return values[index - 1];
  }

  static getPreviousVerticalName(verticalName: CELL_VERTICAL_NAME): CELL_VERTICAL_NAME | undefined {
    const values = Object.values(CELL_VERTICAL_NAME);
    const index = values.indexOf(verticalName);
    return values[index - 1];
  }

  static getNextHorizontalName(
    horizontalName: CELL_HORIZONTAL_NAME,
  ): CELL_HORIZONTAL_NAME | undefined {
    const values = Object.values(CELL_HORIZONTAL_NAME);
    const index = values.indexOf(horizontalName);
    return values[index + 1];
  }

  static getNextVerticalName(verticalName: CELL_VERTICAL_NAME): CELL_VERTICAL_NAME | undefined {
    const values = Object.values(CELL_VERTICAL_NAME);
    const index = values.indexOf(verticalName);
    return values[index + 1];
  }
}
