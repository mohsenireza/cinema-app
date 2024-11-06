import userEvent from '@testing-library/user-event';
import { useParams } from 'react-router-dom';

import { render, screen } from '../../test/utils';
import SeatBooker from './SeatBooker';

beforeEach(() => {
  // Mock useParams return value
  useParams.mockReturnValue({ roomId: '1', movieId: '1' });
});

afterEach(() => {
  // Clear localStorage
  localStorage.clear();
});

test('should select a seat', async () => {
  render(<SeatBooker />);

  const seat = screen.getAllByTestId('seat')[0];

  await userEvent.click(seat);

  expect(seat.classList).toContain('seat-booker__seat--active');
});

test('should de-select a seat', async () => {
  render(<SeatBooker />);

  const seat = screen.getAllByTestId('seat')[0];

  await userEvent.click(seat);
  await userEvent.click(seat);

  expect(seat.classList).not.toContain('seat-booker__seat--active');
});

test('should show a warning when user clicks on submit button but there is no seat selected', async () => {
  render(<SeatBooker />);

  await userEvent.click(screen.getByRole('button', { name: 'Book The Seat' }));

  expect(screen.getByText('Please select a seat first')).toBeInTheDocument();
});

test('should book a seat', async () => {
  render(<SeatBooker />);

  await userEvent.click(screen.getAllByTestId('seat')[0]);
  await userEvent.click(screen.getByRole('button', { name: 'Book The Seat' }));

  expect(screen.getByText('The seat is booked now')).toBeInTheDocument();
});

test('should un-book a seat', async () => {
  render(<SeatBooker />);

  // Book the seat
  await userEvent.click(screen.getAllByTestId('seat')[0]);
  await userEvent.click(screen.getByRole('button', { name: 'Book The Seat' }));

  // Un-book the seat
  await userEvent.click(screen.getAllByTestId('seat')[0]);
  await userEvent.click(screen.getByRole('button', { name: 'Cancel Reservation' }));

  expect(screen.getByText('The reservation was cancelled')).toBeInTheDocument();
});
