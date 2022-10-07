import { CardContainer } from 'components/cardContainer/CardContainer';
import { SearchBar } from 'components/search/SearchBar';
import React from 'react';
import './MainPage.scss';

export function MainPage() {
  return (
    <div className="main">
      <SearchBar></SearchBar>
      <CardContainer></CardContainer>
    </div>
  );
}
