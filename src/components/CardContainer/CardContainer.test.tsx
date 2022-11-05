import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardContainer } from './CardContainer';

const MockCardContainerProps = [
  {
    imgUrl: 'https://live.staticflickr.com/65535/52440409712_6a2f91d6c5_b.jpg',
    title: 'test',
    link: 'https://live.staticflickr.com/65535/52440409712_6a2f91d6c5_b.jpg',
  },
];

test('renders card container with cards', () => {
  render(<CardContainer data={MockCardContainerProps} />);
  const cards = screen.getByText('Title: test');
  expect(cards).toBeInTheDocument();
});
