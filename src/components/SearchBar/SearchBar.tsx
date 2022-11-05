import React, { useRef } from 'react';
import './SearchBar.scss';
import { FlickrImage, SearchBarProps } from './SearchBar.types';

const HOSTNAME = 'https://www.flickr.com';
const IMAGE_HOSTNAME = 'https://live.staticflickr.com';
const PATHNAME = '/services/rest';
const API_KEY = 'd0923ccb06a0c5a498f7c6bf3e464ac2';
const SEARCH_METHOD = `/?method=flickr.photos.search&api_key=${API_KEY}&sort=interestingness-desc&per_page=21&page=1&format=json&nojsoncallback=1`;

export const SearchBar = (props: SearchBarProps) => {
  const inputText = localStorage.getItem('search') || '';
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const fetchData = async (key: string) => {
    try {
      const response = await fetch(`${HOSTNAME}${PATHNAME}${SEARCH_METHOD}&tags=${key}`);
      const data = await response.json();
      const photos = data.photos.photo.map((img: FlickrImage) => {
        return {
          imgUrl: `${IMAGE_HOSTNAME}/${img.server}/${img.id}_${img.secret}_b.jpg`,
          title: img.title ? img.title : 'No title',
          link: `${HOSTNAME}/photos/${img.owner}/${img.id}`,
        };
      });

      return photos;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const searchWord = inputRef.current?.value as string;
    const data = await fetchData(searchWord);
    props.onChange(data);
  };

  const handleChange = () => {
    const node = inputRef.current;
    if (node?.value) {
      localStorage.setItem('search', node.value);
    } else {
      localStorage.removeItem('search');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        ref={inputRef}
        defaultValue={inputText}
        type="search"
        placeholder="Search..."
        autoFocus
        required
        className="search__input"
        onChange={handleChange}
      />
      <button type="submit" className="search__btn">
        Go
      </button>
    </form>
  );
};
