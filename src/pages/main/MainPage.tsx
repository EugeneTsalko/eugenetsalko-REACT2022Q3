import { ApiCard } from 'components/ApiCard/ApiCard.types';
import { CardContainer } from 'components/CardContainer/CardContainer';
import Preloader from 'components/Preloader/Preloader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import React, { useState } from 'react';
import './MainPage.scss';

export const MainPage = () => {
  const [cards, setCards] = useState<ApiCard[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFirstRun, setIsFirstRun] = useState(true);

  const handleChange = (cardsArr: ApiCard[]) => {
    if (isFirstRun) {
      setIsFirstRun(false);
    }

    setIsLoaded(false);

    setTimeout(() => {
      setCards(cardsArr);
      setIsLoaded(true);
    }, 1500);
  };

  const showContent = () => {
    if (isFirstRun) {
      return 'Please, type your search request in the search bar.';
    }

    if (isLoaded && !cards.length) {
      return 'Sorry, no results for your request.';
    }

    if (isLoaded) {
      return <CardContainer data={cards}></CardContainer>;
    }

    return <Preloader></Preloader>;
  };

  return (
    <div className="main">
      <SearchBar onChange={handleChange}></SearchBar>
      {showContent()}
    </div>
  );
};
