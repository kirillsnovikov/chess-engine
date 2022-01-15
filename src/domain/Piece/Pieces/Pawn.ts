import { CHESS_PIECE_TYPE } from '../constants';
import { ChessPiece } from '../Model/ChessPiece';
import { ChessPieceType } from '../Model/ChessPieceType';
import { PieceColor } from '../Model/PieceColor';
import { PieceCoordinate } from '../Model/PieceCoordinate';
import { PieceId } from '../Model/PieceId';

export class Pawn extends ChessPiece {
  constructor(_baseCoordinate: PieceCoordinate, _color: PieceColor) {
    super(
      new PieceId(_baseCoordinate.coordinate.value),
      new ChessPieceType(CHESS_PIECE_TYPE.PAWN),
      _color,
      _baseCoordinate,
    );
  }
}
