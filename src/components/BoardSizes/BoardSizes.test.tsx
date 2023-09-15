import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BoardSizes from './BoardSizes';

describe('BoardSizes component', () => {
  it('renders the component with buttons for different board sizes', () => {
    const selectSizeFn = jest.fn();
    render(<BoardSizes selectSizeFn={selectSizeFn} />);
    
    const header = screen.getByText('How many pairs you would like to find?');
    expect(header).toBeInTheDocument();

    const sizeButtons = screen.getAllByRole('button');
    expect(sizeButtons).toHaveLength(3);
    expect(sizeButtons[0]).toHaveTextContent('3 pairs');
    expect(sizeButtons[1]).toHaveTextContent('6 pairs');
    expect(sizeButtons[2]).toHaveTextContent('10 pairs');
  });

  it('calls the selectSizeFn function when a button is clicked', () => {
    const selectSizeFn = jest.fn();
    render(<BoardSizes selectSizeFn={selectSizeFn} />);
    
    const sizeButtons = screen.getAllByRole('button');

    fireEvent.click(sizeButtons[0]);
    expect(selectSizeFn).toHaveBeenCalledWith(3);

    fireEvent.click(sizeButtons[1]);
    expect(selectSizeFn).toHaveBeenCalledWith(6);

    fireEvent.click(sizeButtons[2]);
    expect(selectSizeFn).toHaveBeenCalledWith(10);
  });
});