import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header/Header';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('renders header', () => {
  const history = createMemoryHistory();
  render(
    <Router location={''} navigator={history}>
      <Header />
    </Router>
  );
  const main = screen.getByText('Main');
  expect(main).toBeInTheDocument();
});
