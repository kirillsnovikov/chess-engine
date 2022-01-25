import styled from 'styled-components';
import { CHESS_PIECE_TYPE, PIECE_COLOR } from '../../domain';
import { CHESS_PIECE_NOTATION } from '../../domain/Piece/constants';
import { PieceColor } from '../../domain/Piece/Model/PieceColor';

type ContainerProps = {
  pieceColor: 'w' | 'b';
  notation: CHESS_PIECE_NOTATION;
};

const Container = styled.div<ContainerProps>`
  font-size: 0.8em;
  display: flex;
  flex: auto;
  align-items: center;
  background-image: ${({ pieceColor, notation }) =>
    `url(images/chess/wood/${pieceColor}${notation.toLowerCase()}.png)`};
  background-size: contain;
`;

export type PieceProps = {
  notation: CHESS_PIECE_NOTATION;
  pieceColor: PIECE_COLOR;
};

export const Piece: React.FC<PieceProps> = ({ pieceColor, notation }) => {
  const color = pieceColor === PIECE_COLOR.WHITE ? 'w' : 'b';
  return <Container pieceColor={color} notation={notation} />;
};
