import React from 'react';
import './Sort.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'redux/store';
import { setSort } from 'redux/slice';
import { SortValues } from 'redux/store.types';

export const Sort = () => {
  const { sort } = useSelector((state: RootState) => state.mainReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleSort = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    dispatch(setSort(target.value as SortValues));
  };

  return (
    <div className="sort">
      <label htmlFor="location">Sort:</label>
      <select className="form__select" value={sort} onChange={handleSort}>
        <option value="relevance">Relevance</option>
        <option value="date-posted-desc">From new to old</option>
        <option value="date-posted-asc">From old to new</option>
      </select>
    </div>
  );
};
