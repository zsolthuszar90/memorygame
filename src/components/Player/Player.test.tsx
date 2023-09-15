import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Player from './Player'; // Import your Player component

describe('Player component', () => {
  const name = 'John Doe';
  const index = 0;
  const singlePlayer = true;
  const nameChange = jest.fn();
  const removePlayer = jest.fn();

  it('renders the Player component', () => {
    render(
      <Player
        name={name}
        index={index}
        singlePlayer={singlePlayer}
        nameChange={nameChange}
        removePlayer={removePlayer}
      />
    );

    // Ensure the component renders with the correct name and placeholder text
    expect(screen.getByText('Player 1')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter name...')).toBeInTheDocument();
  });

  it('handles name change', () => {
    render(
      <Player
        name={name}
        index={index}
        singlePlayer={singlePlayer}
        nameChange={nameChange}
        removePlayer={removePlayer}
      />
    );

    const input = screen.getByPlaceholderText('Enter name...');

    // Simulate a name change event
    fireEvent.change(input, { target: { value: 'New Name' } });

    // Ensure the nameChange function was called with the correct arguments
    expect(nameChange).toHaveBeenCalledWith('New Name', index);
  });

  it('handles player removal', () => {
    render(
      <Player
        name={name}
        index={index}
        singlePlayer={false}
        nameChange={nameChange}
        removePlayer={removePlayer}
      />
    );

    const removeButton = screen.getByText('❌');

    // Simulate a click on the remove button
    fireEvent.click(removeButton);

    // Ensure the removePlayer function was called with the correct index
    expect(removePlayer).toHaveBeenCalledWith(index);
  });
});