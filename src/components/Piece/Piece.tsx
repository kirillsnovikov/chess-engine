import styled from 'styled-components';
import { CHESS_PIECE_TYPE, PIECE_COLOR } from '../../domain';

type ContainerProps = {
  color: string;
};

const Container = styled.div<ContainerProps>`
  color: ${({ color }) => color};
`;

export type PieceProps = {
  type: CHESS_PIECE_TYPE;
  color: string;
};

export const Piece: React.FC<PieceProps> = ({ color, type }) => {
  return <Container color={'#cfdd33'}>{type}</Container>;
};
