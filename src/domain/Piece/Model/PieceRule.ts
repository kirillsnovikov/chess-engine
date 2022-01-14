import { PieceCoordinate } from './PieceCoordinate';

export interface PieceRule {
  checkAvaliableCoordinates: () => PieceCoordinate[];
}
