import { PIECE_BLACK_COLOR_HEX, PIECE_COLOR, PIECE_WHITE_COLOR_HEX } from '../../Piece/constants';
import { PieceColor } from '../../Piece/Model/PieceColor';
import { Bishop, King, Rook, Queen, Pawn, Knight } from '../../Piece/Pieces';
import { Square } from '../Model/Square';
import { ChessCellSet } from '../../Cell/Service/ChessCellSet';

const whitePieceColor = new PieceColor(PIECE_COLOR.WHITE, PIECE_WHITE_COLOR_HEX);
const blackPieceColor = new PieceColor(PIECE_COLOR.BLACK, PIECE_BLACK_COLOR_HEX);

export const BASE_SQUARE_SET: Square[] = [
  new Square(ChessCellSet.findCellById('a1'), new Rook(whitePieceColor)),
  new Square(ChessCellSet.findCellById('b1'), new Knight(whitePieceColor)),
  new Square(ChessCellSet.findCellById('c1'), new Bishop(whitePieceColor)),
  new Square(ChessCellSet.findCellById('d1'), new Queen(whitePieceColor)),
  new Square(ChessCellSet.findCellById('e1'), new King(whitePieceColor)),
  new Square(ChessCellSet.findCellById('f1'), new Bishop(whitePieceColor)),
  new Square(ChessCellSet.findCellById('g1'), new Knight(whitePieceColor)),
  new Square(ChessCellSet.findCellById('h1'), new Rook(whitePieceColor)),
  new Square(ChessCellSet.findCellById('a2'), new Pawn(whitePieceColor)),
  new Square(ChessCellSet.findCellById('b2'), new Pawn(whitePieceColor)),
  new Square(ChessCellSet.findCellById('c2'), new Pawn(whitePieceColor)),
  new Square(ChessCellSet.findCellById('d2'), new Pawn(whitePieceColor)),
  new Square(ChessCellSet.findCellById('e2'), new Pawn(whitePieceColor)),
  new Square(ChessCellSet.findCellById('f2'), new Pawn(whitePieceColor)),
  new Square(ChessCellSet.findCellById('g2'), new Pawn(whitePieceColor)),
  new Square(ChessCellSet.findCellById('h2'), new Pawn(whitePieceColor)),
  new Square(ChessCellSet.findCellById('a8'), new Rook(blackPieceColor)),
  new Square(ChessCellSet.findCellById('b8'), new Knight(blackPieceColor)),
  new Square(ChessCellSet.findCellById('c8'), new Bishop(blackPieceColor)),
  new Square(ChessCellSet.findCellById('d8'), new Queen(blackPieceColor)),
  new Square(ChessCellSet.findCellById('e8'), new King(blackPieceColor)),
  new Square(ChessCellSet.findCellById('f8'), new Bishop(blackPieceColor)),
  new Square(ChessCellSet.findCellById('g8'), new Knight(blackPieceColor)),
  new Square(ChessCellSet.findCellById('h8'), new Rook(blackPieceColor)),
  new Square(ChessCellSet.findCellById('a7'), new Pawn(blackPieceColor)),
  new Square(ChessCellSet.findCellById('b7'), new Pawn(blackPieceColor)),
  new Square(ChessCellSet.findCellById('c7'), new Pawn(blackPieceColor)),
  new Square(ChessCellSet.findCellById('d7'), new Pawn(blackPieceColor)),
  new Square(ChessCellSet.findCellById('e7'), new Pawn(blackPieceColor)),
  new Square(ChessCellSet.findCellById('f7'), new Pawn(blackPieceColor)),
  new Square(ChessCellSet.findCellById('g7'), new Pawn(blackPieceColor)),
  new Square(ChessCellSet.findCellById('h7'), new Pawn(blackPieceColor)),
];
