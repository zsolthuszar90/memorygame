import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Home from './Home';

// Mock the components that are rendered within Home
jest.mock('../../components/BoardSizes/BoardSizes', () => ({ selectSizeFn }: { selectSizeFn: (size: number) => void }) => (
  <div data-testid="board-sizes" onClick={() => selectSizeFn(6)}>BoardSizes Component</div>
));

jest.mock('../../components/Players/Players', () => ({ selectPlayersFn }: { selectPlayersFn: (players: string[]) => void }) => (
  <div data-testid="players" onClick={() => selectPlayersFn(['Player 1', 'Player 2'])}>Players Component</div>
));

jest.mock('../../components/Game/Game', () => ({ size, players }: { size: number; players: string[] }) => (
  <div data-testid="game">Game Component - Size: {size}, Players: {players.join(', ')}</div>
));

describe('Home component', () => {
  it('renders BoardSizes component initially', () => {
    render(<Home />);
    const boardSizesComponent = screen.getByTestId('board-sizes');
    expect(boardSizesComponent).toBeInTheDocument();
  });

  it('renders Players component after selecting board size', () => {
    render(<Home />);
    const boardSizesComponent = screen.getByTestId('board-sizes');
    fireEvent.click(boardSizesComponent);
    const playersComponent = screen.getByTestId('players');
    expect(playersComponent).toBeInTheDocument();
  });
});