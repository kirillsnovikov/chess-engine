import { Cell } from '../../Cell/Model/Cell';
import { ChessCellSet } from '../../Cell/Service/ChessCellSet';
import { Id } from '../../Cell/types';

export class ChessBoard {
  public static board: Cell[] = ChessCellSet.cells;

  public static findCellById(id: Id): Cell {
    return ChessBoard.board.find(cell => cell.id.value === id) as Cell;
  }
}
