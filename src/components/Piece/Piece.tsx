import styled from 'styled-components';
import { CHESS_PIECE_TYPE, PIECE_COLOR } from '../../domain';

type ContainerProps = {
  color: string;
};

const Container = styled.div<ContainerProps>`
  color: ${({ color }) => color};
  font-size: 0.8em;
  display: flex;
  align-items: center;
`;

export type PieceProps = {
  type: CHESS_PIECE_TYPE;
  color: string;
};

export const Piece: React.FC<PieceProps> = ({ color, type }) => {
  return <Container color={'#000000'}>{type}</Container>;
};
