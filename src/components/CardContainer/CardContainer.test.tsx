import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardContainer } from './CardContainer';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

test('renders card container with cards', () => {
  render(
    <Provider store={store}>
      <CardContainer />
    </Provider>
  );
  const cards = screen.getByTestId('react-card-container');
  expect(cards).toBeInTheDocument();
});
