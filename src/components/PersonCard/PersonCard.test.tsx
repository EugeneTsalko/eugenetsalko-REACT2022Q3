import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonCard from './PersonCard';

const mockData = {
  firstName: 'Kanstantsin',
  lastName: 'Mikhaltsevich',
  birthDate: '11.03.1995',
  location: 'Europe',
  dataAgree: false,
  sex: 'Male',
  photo: '',
};

test('renders person card', () => {
  render(<PersonCard data={mockData}></PersonCard>);
  const firstName = screen.getByText(mockData.firstName);
  const location = screen.getByText(mockData.location);
  expect(firstName).toBeInTheDocument();
  expect(location).toBeInTheDocument();
});
