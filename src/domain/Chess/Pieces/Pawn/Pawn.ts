import { CHESS_PIECE_TYPE } from '../../../Piece/constants';
import { ChessPiece } from '../../../Piece/Model/ChessPiece';
import { ChessPieceType } from '../../../Piece/Model/ChessPieceType';
import { PieceColor } from '../../../Piece/Model/PieceColor';
import { PieceCoordinate } from '../../../Piece/Model/PieceCoordinate';
import { PieceId } from '../../../Piece/Model/PieceId';

export class Pawn {
  private _piece: ChessPiece;

  private _avaliableCoordinates: PieceCoordinate[] = [];

  constructor(
    private _baseCoordinate: PieceCoordinate,
    private _color: PieceColor,
  ) {
    this._piece = new ChessPiece(
      new PieceId(_baseCoordinate.coordinate.value),
      new ChessPieceType(CHESS_PIECE_TYPE.PAWN),
      _color,
      _baseCoordinate,
    );
  }
}
