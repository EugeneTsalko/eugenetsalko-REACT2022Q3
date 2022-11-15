import React from 'react';
import './SearchBar.scss';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState, AppDispatch } from '../../redux/store';
import { setIsFirstRun, setSearchWord } from 'redux/slice';

export const SearchBar = () => {
  const { searchWord } = useSelector((state: RootState) => state.mainReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const word = (event.target as HTMLFormElement).search.value;
    if (word.trim()) {
      dispatch(setSearchWord(word));
      dispatch(setIsFirstRun(false));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        defaultValue={searchWord}
        name="search"
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
};
