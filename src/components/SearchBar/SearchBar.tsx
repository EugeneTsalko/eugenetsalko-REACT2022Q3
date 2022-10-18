import React from 'react';
import './SearchBar.scss';

export class SearchBar extends React.Component<unknown, { inputValue: string }> {
  myRef: React.RefObject<HTMLInputElement>;
  inputText: string;
  constructor(props: string) {
    super(props);
    this.inputText = localStorage.getItem('search') || '';
    this.myRef = React.createRef();
  }

  componentWillUnmount(): void {
    const node = this.myRef.current;
    if (node?.value) {
      localStorage.setItem('search', node.value);
    } else {
      localStorage.removeItem('search');
    }
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={(event) => event.preventDefault()} className="search">
        <input
          ref={this.myRef}
          defaultValue={this.inputText}
          type="search"
          placeholder="Search..."
          autoFocus
          required
          className="search__input"
        />
        <button type="submit" className="search__btn">
          Go
        </button>
      </form>
    );
  }
}
