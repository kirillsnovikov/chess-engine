import { Id } from '../../Cell/types';
import { PlacePiecesOnBoard } from '../Service/PlacePiecesOnBoard';
import { SquareChecker } from '../Service/SquareChecker';
import { Square } from './Square';

export class ChessBoard {
  private _squares: Square[];

  constructor() {
    this._squares = new PlacePiecesOnBoard().run();
    this.checkAvailableCoordinates();
  }

  public get squares() {
    return this._squares;
  }

  public checkAvailableCoordinates(): void {
    const checker = new SquareChecker(this._squares);
    this._squares.forEach(square => {
      if (square.isEmpty) {
        return;
      }
      square.setAvailableCoordinates(checker.getAvailableCoordinates(square));
    });
  }
}
