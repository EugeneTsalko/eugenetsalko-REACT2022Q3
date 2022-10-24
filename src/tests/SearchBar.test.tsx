import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '../components/SearchBar/SearchBar';

const LocalStorageMock = (function () {
  const storage: { [key: string]: string } = {};

  return {
    setItem: function (key: string, value: string) {
      storage[key] = value || '';
    },
    getItem: function (key: string) {
      return key in storage ? storage[key] : null;
    },
  };
})();

const setLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

test('renders searchbar', () => {
  render(<SearchBar onChange={() => console.log('42')} />);
  const placeholderText = screen.getByPlaceholderText('Search...');
  expect(placeholderText).toBeInTheDocument();
});

describe('searchbar with localstorage', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', { value: LocalStorageMock });
  });

  test('testing localStorage', () => {
    render(<SearchBar onChange={() => console.log('42')} />);
    const input: HTMLInputElement = screen.getByPlaceholderText('Search...');
    input.value = '123';
    setLocalStorage('inputValue', input.value);
    expect(localStorage.getItem('inputValue')).toEqual(input.value);
  });
});
