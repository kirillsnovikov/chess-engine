import { ChessBoard } from '../../Board/Model/ChessBoard';
import { CellId } from '../../Cell/Model/CellId';
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
  new Rook(new PieceCoordinate(new CellId('a1')), whitePieceColor),
  new Bishop(new PieceCoordinate(new CellId('b1')), whitePieceColor),
  new Knight(new PieceCoordinate(new CellId('c1')), whitePieceColor),
  new Queen(new PieceCoordinate(new CellId('d1')), whitePieceColor),
  new King(new PieceCoordinate(new CellId('e1')), whitePieceColor),
  new Bishop(new PieceCoordinate(new CellId('f1')), whitePieceColor),
  new Knight(new PieceCoordinate(new CellId('g1')), whitePieceColor),
  new Rook(new PieceCoordinate(new CellId('h1')), whitePieceColor),
  new Pawn(new PieceCoordinate(new CellId('a2')), whitePieceColor),
  new Pawn(new PieceCoordinate(new CellId('b2')), whitePieceColor),
  new Pawn(new PieceCoordinate(new CellId('c2')), whitePieceColor),
  new Pawn(new PieceCoordinate(new CellId('d2')), whitePieceColor),
  new Pawn(new PieceCoordinate(new CellId('e2')), whitePieceColor),
  new Pawn(new PieceCoordinate(new CellId('f2')), whitePieceColor),
  new Pawn(new PieceCoordinate(new CellId('g2')), whitePieceColor),
  new Pawn(new PieceCoordinate(new CellId('h2')), whitePieceColor),
  new Rook(new PieceCoordinate(new CellId('a8')), blackPieceColor),
  new Bishop(new PieceCoordinate(new CellId('b8')), blackPieceColor),
  new Knight(new PieceCoordinate(new CellId('c8')), blackPieceColor),
  new Queen(new PieceCoordinate(new CellId('d8')), blackPieceColor),
  new King(new PieceCoordinate(new CellId('e8')), blackPieceColor),
  new Bishop(new PieceCoordinate(new CellId('f8')), blackPieceColor),
  new Knight(new PieceCoordinate(new CellId('g8')), blackPieceColor),
  new Rook(new PieceCoordinate(new CellId('h8')), blackPieceColor),
  new Pawn(new PieceCoordinate(new CellId('a7')), blackPieceColor),
  new Pawn(new PieceCoordinate(new CellId('b7')), blackPieceColor),
  new Pawn(new PieceCoordinate(new CellId('c7')), blackPieceColor),
  new Pawn(new PieceCoordinate(new CellId('d7')), blackPieceColor),
  new Pawn(new PieceCoordinate(new CellId('e7')), blackPieceColor),
  new Pawn(new PieceCoordinate(new CellId('f7')), blackPieceColor),
  new Pawn(new PieceCoordinate(new CellId('g7')), blackPieceColor),
  new Pawn(new PieceCoordinate(new CellId('h7')), blackPieceColor),
];
