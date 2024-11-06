import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';

import { render, screen } from '../../test/utils';
import Header from './Header';

const title = 'test-title';

afterEach(async () => {
  const navigate = useNavigate();
  navigate.mockClear();
});

test('should render header', () => {
  render(<Header title={title} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test('should go back when user clicks on the back button', async () => {
  render(<Header title={title} />);

  await userEvent.click(screen.getByRole('button'));

  const navigate = useNavigate();
  expect(navigate).toBeCalledTimes(1);
});
