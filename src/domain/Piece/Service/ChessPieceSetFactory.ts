import { ChessBoard } from '../../Board/Model/ChessBoard';
import {
  PIECE_BLACK_COLOR_HEX,
  PIECE_COLOR,
  PIECE_WHITE_COLOR_HEX,
} from '../../Piece/constants';
import { PieceColor } from '../../Piece/Model/PieceColor';
import { PieceCoordinate } from '../../Piece/Model/PieceCoordinate';
import { Bishop, King, Knight, Pawn, Queen, Rook } from '../../Piece/Pieces';

const whitePieceColor = new PieceColor(
  PIECE_COLOR.WHITE,
  PIECE_WHITE_COLOR_HEX,
);
const blackPieceColor = new PieceColor(
  PIECE_COLOR.BLACK,
  PIECE_BLACK_COLOR_HEX,
);

export const CHESS_PIECE_SET = [
  new Rook(
    new PieceCoordinate(ChessBoard.findCellById('a1').id),
    whitePieceColor,
  ),
  new Bishop(
    new PieceCoordinate(ChessBoard.findCellById('b1').id),
    whitePieceColor,
  ),
  new Knight(
    new PieceCoordinate(ChessBoard.findCellById('c1').id),
    whitePieceColor,
  ),
  new Queen(
    new PieceCoordinate(ChessBoard.findCellById('d1').id),
    whitePieceColor,
  ),
  new King(
    new PieceCoordinate(ChessBoard.findCellById('e1').id),
    whitePieceColor,
  ),
  new Bishop(
    new PieceCoordinate(ChessBoard.findCellById('f1').id),
    whitePieceColor,
  ),
  new Knight(
    new PieceCoordinate(ChessBoard.findCellById('g1').id),
    whitePieceColor,
  ),
  new Rook(
    new PieceCoordinate(ChessBoard.findCellById('h1').id),
    whitePieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('a2').id),
    whitePieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('b2').id),
    whitePieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('c2').id),
    whitePieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('d2').id),
    whitePieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('e2').id),
    whitePieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('f2').id),
    whitePieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('g2').id),
    whitePieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('h2').id),
    whitePieceColor,
  ),
  new Rook(
    new PieceCoordinate(ChessBoard.findCellById('a8').id),
    blackPieceColor,
  ),
  new Bishop(
    new PieceCoordinate(ChessBoard.findCellById('b8').id),
    blackPieceColor,
  ),
  new Knight(
    new PieceCoordinate(ChessBoard.findCellById('c8').id),
    blackPieceColor,
  ),
  new Queen(
    new PieceCoordinate(ChessBoard.findCellById('d8').id),
    blackPieceColor,
  ),
  new King(
    new PieceCoordinate(ChessBoard.findCellById('e8').id),
    blackPieceColor,
  ),
  new Bishop(
    new PieceCoordinate(ChessBoard.findCellById('f8').id),
    blackPieceColor,
  ),
  new Knight(
    new PieceCoordinate(ChessBoard.findCellById('g8').id),
    blackPieceColor,
  ),
  new Rook(
    new PieceCoordinate(ChessBoard.findCellById('h8').id),
    blackPieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('a7').id),
    blackPieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('b7').id),
    blackPieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('c7').id),
    blackPieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('d7').id),
    blackPieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('e7').id),
    blackPieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('f7').id),
    blackPieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('g7').id),
    blackPieceColor,
  ),
  new Pawn(
    new PieceCoordinate(ChessBoard.findCellById('h7').id),
    blackPieceColor,
  ),
];
