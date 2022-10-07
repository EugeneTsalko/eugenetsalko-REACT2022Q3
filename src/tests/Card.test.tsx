import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../components/card/Card';
import { houses } from 'data/data';

test('renders card', () => {
  render(<Card data={houses[0]}></Card>);
  const img = screen.getByAltText('Detached house • 5y old');
  const address = screen.getByText('742 Evergreen Terrace');
  const realtor = screen.getByAltText('realtor');
  expect(img).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(realtor).toBeInTheDocument();
});
