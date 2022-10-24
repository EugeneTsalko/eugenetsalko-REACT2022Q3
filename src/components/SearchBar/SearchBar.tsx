import React from 'react';
import './SearchBar.scss';
import { ApiCard, FlickrImage } from './SearchBar.types';

type SearchBarProps = {
  onChange: (data: ApiCard[]) => void;
};

export class SearchBar extends React.Component<SearchBarProps, unknown> {
  inputRef: React.RefObject<HTMLInputElement>;
  inputText: string;
  constructor(props: SearchBarProps) {
    super(props);
    this.inputText = localStorage.getItem('search') || '';
    this.inputRef = React.createRef();
  }

  componentWillUnmount(): void {
    const node = this.inputRef.current;
    if (node?.value) {
      localStorage.setItem('search', node.value);
    } else {
      localStorage.removeItem('search');
    }
  }

  fetchData = async (key: string) => {
    try {
      const response = await fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d0923ccb06a0c5a498f7c6bf3e464ac2&tags=${key}&sort=interestingness-desc&per_page=21&page=1&format=json&nojsoncallback=1`
      );
      const data = await response.json();
      const photos = data.photos.photo.map((img: FlickrImage) => {
        return {
          imgUrl: `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`,
          title: img.title ? img.title : 'No title',
          link: `https://www.flickr.com/photos/${img.owner}/${img.id}`,
        };
      });

      return photos;
    } catch (err) {
      console.log(err);
    }
  };

  handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const searchWord = this.inputRef.current?.value as string;
    const data = await this.fetchData(searchWord);
    this.props.onChange(data);
  };

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handleSubmit} className="search">
        <input
          ref={this.inputRef}
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
