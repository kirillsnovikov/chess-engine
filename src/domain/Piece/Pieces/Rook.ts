import { CHESS_PIECE_TYPE } from '../constants';
import { ChessPiece } from '../Model/ChessPiece';
import { ChessPieceType } from '../Model/ChessPieceType';
import { PieceColor } from '../Model/PieceColor';

export class Rook extends ChessPiece {
  constructor(_color: PieceColor) {
    super(new ChessPieceType(CHESS_PIECE_TYPE.ROOK), _color);
  }
}
