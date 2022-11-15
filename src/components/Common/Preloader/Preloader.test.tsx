import React from 'react';
import { render, screen } from '@testing-library/react';
import { Preloader } from 'components/Common/Preloader/Preloader';

test('test preloader render', () => {
  render(<Preloader />);
  const preloader = screen.getByTestId('react-preloader');
  expect(preloader).toBeInTheDocument();
});
