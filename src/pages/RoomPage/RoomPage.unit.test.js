import { useParams } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test/utils';
import RoomPage from './RoomPage';
import { db } from '../../data/db';


const room = db.rooms[0];

beforeAll(() => {
  useParams.mockReturnValue({ roomId: room.id });
});

test('should render header', () => {
  render(<RoomPage />);

  expect(screen.getByText(room.title)).toBeInTheDocument();
});

test('should render movies', () => {
  render(<RoomPage />);

  room.movies.forEach(movie => {
    expect(screen.getByRole('heading', { name: movie.title })).toBeInTheDocument();
  });
});

test('should navigate to the movie page when clicking on a movie item', async () => {
  render(<RoomPage />);

  const movie = room.movies[0];

  await userEvent.click(screen.getByRole('heading', { name: movie.title }));

  expect(document.location.pathname).toBe(`/room/${room.id}/movie/${movie.id}`);
});
