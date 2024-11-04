import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test/utils';
import RoomItem from './RoomItem';

test('should render the room item', async () => {
  const title = 'title';
  const id = 'id';

  render(<RoomItem id={id} title={title} />);

  expect(screen.getByRole('link', { name: title })).toBeInTheDocument();
});

test('should navigate to the room page when user clicks on a room item', async () => {
  const title = 'title';
  const id = 'id';

  render(<RoomItem id={id} title={title} />);

  await userEvent.click(screen.getByRole('link', { name: title }));

  expect(document.location.pathname).toBe(`/room/${id}`);
});
