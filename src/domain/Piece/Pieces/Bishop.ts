import { CHESS_PIECE_TYPE } from '../constants';
import { ChessPiece } from '../Model/ChessPiece';
import { ChessPieceType } from '../Model/ChessPieceType';
import { PieceColor } from '../Model/PieceColor';
import { PieceCoordinate } from '../Model/PieceCoordinate';
import { PieceId } from '../Model/PieceId';

export class Bishop extends ChessPiece {
  constructor(baseCoordinate: PieceCoordinate, color: PieceColor) {
    super(
      new PieceId(baseCoordinate.coordinate.value),
      new ChessPieceType(CHESS_PIECE_TYPE.BISHOP),
      color,
      baseCoordinate,
    );
  }
}
