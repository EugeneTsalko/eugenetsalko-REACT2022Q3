import React, { useEffect } from 'react';
import './MainPage.scss';
import { PhotoCardType } from 'components/PhotoCard/PhotoCard.types';
import { CardContainer } from 'components/CardContainer/CardContainer';
import { Preloader } from 'components/Common/Preloader/Preloader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Sort } from 'components/Sort/Sort';
import { Pagination } from 'components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'redux/store';
import { getData, setIsFirstRun } from 'redux/slice';

export const MainPage = () => {
  const { searchWord, sort, currentPage, isFirstRun, isLoaded, cards } = useSelector(
    (state: RootState) => state.mainReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    searchWord && complexFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchWord, sort]);

  const complexFetch = async () => {
    isFirstRun && dispatch(setIsFirstRun(false));

    dispatch(getData({ searchWord, sort, currentPage }));
  };

  const showContent = (cardsArr: PhotoCardType[]) => {
    if (isFirstRun) {
      return 'Please, type your search request in the search bar.';
    }

    if (isLoaded && !cardsArr.length) {
      return 'Sorry, no results for your request.';
    }

    if (isLoaded) {
      return <CardContainer></CardContainer>;
    }

    if (!isLoaded) {
      return <Preloader></Preloader>;
    }
  };

  return (
    <div className="main">
      <SearchBar />
      <Sort />
      <Pagination />
      {showContent(cards)}
    </div>
  );
};
