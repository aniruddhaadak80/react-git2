import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the greeting', () => {
  render(<App />);
  expect(screen.getByText(/hii react/i)).toBeInTheDocument();
});

test('renders the intro heading', () => {
  render(<App />);
  expect(screen.getByText(/i came back/i)).toBeInTheDocument();
});
