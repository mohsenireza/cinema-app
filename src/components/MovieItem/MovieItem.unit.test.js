import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test/utils';
import MovieItem from './MovieItem';

const roomId = '1';
const movie = {
  id: '1',
  image: 'http://test-image-src.com',
  title: 'test-title',
  startsAt: 'This wednesday 02:00 AM'
};

test('should render the movie item', () => {
  render(<MovieItem movie={movie} roomId={roomId} />);

  expect(screen.getByRole('heading', { name: movie.title })).toBeInTheDocument();
  expect(screen.getByText(movie.startsAt)).toBeInTheDocument();
  const imageElement = screen.getByRole('img', { name: movie.title });
  expect(imageElement.src).toContain(movie.image);
  const movieItemElement = screen.getByTestId('movie-item');
  expect(movieItemElement).toBeInstanceOf(HTMLLIElement);
  expect(movieItemElement.classList).not.toContain('movie-item--not-clickable');
});

test('should render a non-clickable movie item', () => {
  const isClickable = false;

  render(<MovieItem movie={movie} roomId={roomId} isClickable={isClickable} />);

  const movieItemElement = screen.getByTestId('movie-item');
  expect(movieItemElement.classList).toContain('movie-item--not-clickable');
});

test('should render div as the container element of the movie item', () => {
  const isListItem = false;

  render(<MovieItem movie={movie} roomId={roomId} isListItem={isListItem} />);

  const movieItemElement = screen.getByTestId('movie-item');
  expect(movieItemElement).toBeInstanceOf(HTMLDivElement);
});

test('should navigate to the movie page when user clicks on a movie item', async () => {
  render(<MovieItem movie={movie} roomId={roomId} />);

  await userEvent.click(screen.getByText(movie.title));

  expect(document.location.pathname).toBe(`/room/${roomId}/movie/${movie.id}`);
});
