import React from 'react';
import './SearchBar.scss';

export class SearchBar extends React.Component<unknown, { inputValue: string }> {
  constructor(props: string) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('inputValue') ?? '',
    };
  }

  componentDidMount(): void {
    (document.getElementById('search') as HTMLInputElement).value = this.state.inputValue;
  }

  componentWillUnmount(): void {
    const searchValue: string = (document.getElementById('search') as HTMLInputElement).value;
    localStorage.setItem('inputValue', searchValue);
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={(event) => event.preventDefault()} role="search" className="search">
        <input
          id="search"
          type="search"
          placeholder="Search..."
          autoFocus
          required
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Go
        </button>
      </form>
    );
  }
}
