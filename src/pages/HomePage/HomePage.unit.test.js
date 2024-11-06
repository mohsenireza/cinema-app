import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test/utils';
import HomePage from './HomePage';
import { db } from '../../data/db';

test('should render rooms', () => {
  render(<HomePage />);

  db.rooms.forEach(room => {
    expect(screen.getByRole('heading', { name: room.title })).toBeInTheDocument();
  });
});

test('should navigate to the room page when clicking on a room item', async () => {
  render(<HomePage />);

  const room = db.rooms[0];

  await userEvent.click(screen.getByRole('heading', { name: room.title }));

  expect(document.location.pathname).toBe(`/room/${room.id}`);
});
