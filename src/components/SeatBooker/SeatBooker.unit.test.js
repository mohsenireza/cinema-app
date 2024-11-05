import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test/utils';
import SeatBooker from './SeatBooker';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ roomId: '1', movieId: '1' }),
}));

afterEach(() => {
  // Clear localStorage
  localStorage.clear();
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
