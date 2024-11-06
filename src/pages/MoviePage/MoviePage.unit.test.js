import userEvent from '@testing-library/user-event';
import { useParams } from 'react-router-dom';

import { render, screen } from '../../test/utils';
import MoviePage from './MoviePage';
import { db } from '../../data/db';

const room = db.rooms[0];
const movie = room.movies[0];

beforeEach(() => {
  // Mock useParams return value
  useParams.mockReturnValue({ roomId: room.id, movieId: movie.id });
});

test('should render header', () => {
  render(<MoviePage />);

  expect(screen.getByText('Book a seat')).toBeInTheDocument();
});

test('should load movie data', () => {
  render(<MoviePage />);

  expect(screen.getByRole('heading', { name: movie.title })).toBeInTheDocument();
});

test('should render seat booker', () => {
  render(<MoviePage />);

  expect(screen.getByRole('button', { name: 'Book The Seat' })).toBeInTheDocument();
});

test('should not render the seat booker when roomId is invalid', () => {
  useParams.mockReturnValue({ roomId: 'invalid-id', movieId: movie.id });

  render(<MoviePage />);

  expect(screen.queryByRole('button', { name: 'Book The Seat' })).not.toBeInTheDocument();
});

test('should not render the seat booker when movieId is invalid', () => {
  useParams.mockReturnValue({ roomId: room.id, movieId: 'invalid-id' });

  render(<MoviePage />);

  expect(screen.queryByRole('button', { name: 'Book The Seat' })).not.toBeInTheDocument();
});
