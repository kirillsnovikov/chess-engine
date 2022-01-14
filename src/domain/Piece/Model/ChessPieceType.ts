import { CHESS_PIECE_TYPE } from '../constants';

export class ChessPieceType {
  constructor(private _title: CHESS_PIECE_TYPE) {}

  get title() {
    return this._title;
  }
}
