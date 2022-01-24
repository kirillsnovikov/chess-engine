import { CHESS_PIECE_NOTATION, CHESS_PIECE_TYPE } from '../constants';

export class ChessPieceType {
  constructor(private _type: CHESS_PIECE_TYPE) {}

  get value() {
    return this._type;
  }

  getNotation(): CHESS_PIECE_NOTATION {
    const key = (Object.keys(CHESS_PIECE_TYPE) as Array<keyof typeof CHESS_PIECE_TYPE>)[
      Object.values(CHESS_PIECE_TYPE).indexOf(this._type)
    ];
    return CHESS_PIECE_NOTATION[key];
  }
}
