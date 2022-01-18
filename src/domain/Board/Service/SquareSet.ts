import { ChessCellSet } from '../../Cell/Service/ChessCellSet';
import { Square } from '../Model/Square';
import { BASE_SQUARE_SET } from './BaseSquareSetFactory';

export class SquareSet {
  static _cells = ChessCellSet.cells;

  static _baseSquares = BASE_SQUARE_SET;

  static squares = SquareSet.run();

  static run(): Square[] {
    return this._cells.map(cell => {
      return (
        this._baseSquares.find(square => {
          return cell.id.value === square.cellId.value;
        }) || new Square(cell)
      );
    });
  }
}
