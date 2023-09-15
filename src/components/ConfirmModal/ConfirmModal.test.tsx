import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ConfirmModal from './ConfirmModal';

describe('ConfirmModal component', () => {
  it('renders the modal with a caption', () => {
    const caption = 'Are you sure you want to continue?';
    render(<ConfirmModal cancel={() => {}} confirm={() => {}} caption={caption} />);
    
    const modalCaption = screen.getByText(caption);
    expect(modalCaption).toBeInTheDocument();
  });

  it('calls the cancel function when the Cancel button is clicked', () => {
    const cancelFn = jest.fn();
    render(<ConfirmModal cancel={cancelFn} confirm={() => {}} caption="Caption" />);
    
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(cancelFn).toHaveBeenCalledTimes(1);
  });

  it('calls the confirm function when the Confirm button is clicked', () => {
    const confirmFn = jest.fn();
    render(<ConfirmModal cancel={() => {}} confirm={confirmFn} caption="Caption" />);
    
    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);

    expect(confirmFn).toHaveBeenCalledTimes(1);
  });
});