import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bank of Flatiron header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Bank of Flatiron/i);
  expect(headerElement).toBeInTheDocument();
});
