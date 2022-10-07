import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardContainer } from '../components/cardContainer/CardContainer';

test('renders card container with cards', () => {
  render(<CardContainer />);
  const cards = screen.getAllByText('Realtor');
  expect(cards.length === 8);
});
