import styled from 'styled-components';
import { Square as SquareType } from '../../domain';
import { Piece } from '../Piece/Piece';

type ContainerProps = {
  backgroundColor: string;
};

const Container = styled.div<ContainerProps>`
  width: ${100 / 8}%;
  height: ${100 / 8}%;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export type SquareProps = {
  square: SquareType;
  isAvailable: boolean;
  checkAvailableSquares: (squares: SquareType) => void;
  setCurrentSquare: (square: SquareType) => void;
};

export const Square: React.FC<SquareProps> = ({
  square,
  isAvailable,
  checkAvailableSquares,
  setCurrentSquare,
}) => {
  const backgroundColor = isAvailable ? '#FFD700' : square.cellHexColor;
  const clickHandler = () => {
    checkAvailableSquares(square);
    setCurrentSquare(square);
  };
  return (
    <Container backgroundColor={backgroundColor} onClick={clickHandler}>
      {square.piece && <Piece pieceColor={square.piece.color} notation={square.piece.notation} />}
    </Container>
  );
};
