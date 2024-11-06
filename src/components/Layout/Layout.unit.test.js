import { render, screen } from '../../test/utils';
import Layout from './Layout';

test('should render the component', () => {
  render(<Layout />);

  expect(screen.getByTestId('layout')).toBeInTheDocument();
});
