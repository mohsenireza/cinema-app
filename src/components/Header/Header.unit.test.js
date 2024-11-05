import userEvent from '@testing-library/user-event';

import { render, screen } from '../../test/utils';
import Header from './Header';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

const title = 'test-title';

afterEach(async () => {
  mockedUseNavigate.mockClear();
});

test('should render header', () => {
  render(<Header title={title} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test('should go back when user clicks on the back button', async () => {
  render(<Header title={title} />);

  await userEvent.click(screen.getByRole('button'));

  expect(mockedUseNavigate).toBeCalledTimes(1);
});