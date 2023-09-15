import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Gameover from './Gameover';

describe('Gameover component', () => {
  it('renders "Nice! All pairs found!" and "Play again" button for single player', () => {
    const scores = [{ name: 'Player 1', score: 10 }];
    const players = ['Player 1'];
    const times = { timeNumber: 123, timeString: '2:03' };
    const size = 10;
    const restart = jest.fn();

    render(
      <Gameover
        scores={scores}
        players={players}
        times={times}
        size={size}
        restart={restart}
      />
    );

    expect(screen.getByText('Nice! All pairs found!')).toBeInTheDocument();
    expect(
      screen.getByText(`You have finished in ${times.timeString}. Check the scoreboard!`)
    ).toBeInTheDocument();
    expect(screen.getByText('Play again')).toBeInTheDocument();
  });

  it('renders player rankings for multiplayer', () => {
    const scores = [
      { name: 'Player 1', score: 10 },
      { name: 'Player 2', score: 8 },
    ];
    const players = ['Player 1', 'Player 2'];
    const times = { timeNumber: 123, timeString: '2:03' };
    const size = 10;
    const restart = jest.fn();

    render(
      <Gameover
        scores={scores}
        players={players}
        times={times}
        size={size}
        restart={restart}
      />
    );

    expect(screen.getByText('Nice! All pairs found!')).toBeInTheDocument();
    expect(screen.getByText('1. Player 1 found 10 pairs')).toBeInTheDocument();
    expect(screen.getByText('2. Player 2 found 8 pairs')).toBeInTheDocument();
    expect(screen.getByText('Play again')).toBeInTheDocument();
  });

  it('calls the "restart" function when "Play again" button is clicked', () => {
    const scores = [{ name: 'Player 1', score: 10 }];
    const players = ['Player 1'];
    const times = { timeNumber: 123, timeString: '2:03' };
    const size = 10;
    const restart = jest.fn();

    render(
      <Gameover
        scores={scores}
        players={players}
        times={times}
        size={size}
        restart={restart}
      />
    );

    const playAgainButton = screen.getByText('Play again');
    fireEvent.click(playAgainButton);

    expect(restart).toHaveBeenCalled();
  });
});