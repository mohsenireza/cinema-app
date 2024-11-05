import { render, screen } from '../../test/utils';
import HomePage from './HomePage';
import { db } from '../../data/db';

test('should render rooms', () => {
  render(<HomePage />);

  db.rooms.forEach(room => {
    expect(screen.getByRole('heading', { name: room.title })).toBeInTheDocument();
  });
});
