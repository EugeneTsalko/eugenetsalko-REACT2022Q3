import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import mockData from '../../data/mockData.json';

test('renders card', () => {
  render(<Card data={mockData[0]}></Card>);
  const img = screen.getByAltText(mockData[0].title);
  const address = screen.getByText(mockData[0].subtitle);
  const realtor = screen.getByText(mockData[0].userName);
  expect(img).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(realtor).toBeInTheDocument();
});
