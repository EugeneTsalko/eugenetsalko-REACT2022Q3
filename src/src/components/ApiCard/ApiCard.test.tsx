import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MainPage } from '../../pages/main/MainPage';

const mockRequest = 'mountains';

test('test search input and apicards render', () => {
  render(<MainPage />);
  userEvent.type(screen.getByPlaceholderText('Search...'), mockRequest);
  fireEvent.click(screen.getByRole('button'));

  setTimeout(() => screen.getAllByTestId('react-apicard').length === 21, 0);
});
