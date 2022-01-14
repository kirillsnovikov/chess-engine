import { Cell } from '../../Cell/Model/Cell';
import { ChessCellSet } from '../../Cell/Service/ChessCellSet';

export class ChessBoard {
  public static board: Cell[] = new ChessCellSet().set;
}
