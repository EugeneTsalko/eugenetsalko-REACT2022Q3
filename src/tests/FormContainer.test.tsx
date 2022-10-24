import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormContainer } from '../components/FormContainer/FormContainer';
import userEvent from '@testing-library/user-event';

const mockData = {
  firstName: 'Kanstantsin',
  lastName: 'Mikhaltsevich',
  birthDate: '11.03.1995',
  location: 'Europe',
  dataAgree: false,
  sex: 'Male',
  photo: '',
};

test('renders form and container', async () => {
  render(<FormContainer />);
  const form = await screen.getByTestId('react-form');
  const formcards = await screen.getByTestId('react-formcards');
  expect(form).toBeInTheDocument();
  expect(formcards).toBeInTheDocument();
});

test('test inputs and form submit', () => {
  render(<FormContainer />);
  userEvent.type(screen.getByPlaceholderText('Enter your first name...'), mockData.firstName);
  userEvent.type(screen.getByPlaceholderText('Enter your last name...'), mockData.lastName);
  userEvent.type(screen.getByTestId('react-birthDate'), mockData.birthDate);
  userEvent.click(screen.getByTestId('react-sex'));
  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByText('Please select location')).toBeInTheDocument();
});
