import { CHESS_PIECE_TYPE } from '../constants';

export class ChessPieceType {
  constructor(private _type: CHESS_PIECE_TYPE) {}

  get value() {
    return this._type;
  }
}
