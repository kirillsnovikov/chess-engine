import { useState, memo, useEffect } from 'react';
import styled from 'styled-components';
import { ChessBoard, Square as SquareType } from '../../domain';
import { Square } from '../Square/Square';

type SquaresProps = {
  isRotate: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  padding: 1em 2em;
  background-color: #c3ff37;
  width: fit-content;
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  &:hover {
    cursor: pointer;
    background-color: #daff84;
  }
`;

const Squares = styled.div<SquaresProps>`
  width: 1000px;
  height: 1000px;
  display: flex;
  flex-wrap: ${({ isRotate }) => (isRotate ? 'wrap-reverse' : 'wrap')};
  flex-direction: ${({ isRotate }) => (isRotate ? 'row-reverse' : 'row')};
`;

export type BoardProps = {
  color: string;
};

export const Board: React.FC<unknown> = memo(() => {
  const { squares, move } = new ChessBoard();
  const [isRotate, setIsRotate] = useState<boolean>(false);
  const [availableSquares, setAvailableSquares] = useState<SquareType[]>([]);
  const [selectedSquare, setSelectedSquare] = useState<SquareType | null>(null);
  const [targetSquare, setTargetSquare] = useState<SquareType | null>(null);

  const handleRotate = () => {
    setIsRotate(prev => !prev);
  };

  useEffect(() => {
    if (!selectedSquare || !targetSquare) {
      return;
    }
    move(selectedSquare as SquareType, targetSquare as SquareType);
    setSelectedSquare(null);
    setTargetSquare(null);
  }, [selectedSquare, targetSquare]);

  const defineAvailableSquares = (data: SquareType[]) => {
    if (!data) {
      return;
    }
    setAvailableSquares(data);
  };

  const movePice = (currentSquare: SquareType) => {
    // TODO допилить логику ходов
    // if (currentSquare.availableSquares.length === 0) {
    //   setSelectedSquare(null);
    //   setTargetSquare(null);
    // }

    if (!selectedSquare) {
      setSelectedSquare(currentSquare);
    }

    if (!!selectedSquare && !targetSquare) {
      setTargetSquare(currentSquare);
    }
  };

  const isAvailable = (id: string): boolean => {
    return !!availableSquares.find(square => square.cellId.value === id);
  };

  return (
    <Container>
      <Button onClick={handleRotate}>Rotate</Button>
      <Squares isRotate={isRotate}>
        {squares.map(square => {
          return (
            <Square
              square={square}
              isAvailable={isAvailable(square.cellId.value)}
              setAvailableSquares={defineAvailableSquares}
              setCurrentSquare={movePice}
              key={square.cellId.value}
            />
          );
        })}
      </Squares>
    </Container>
  );
});
