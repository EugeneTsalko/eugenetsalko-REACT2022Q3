import { CardContainer } from 'components/CardContainer/CardContainer';
import { SearchBar } from 'components/SearchBar/SearchBar';
import mockData from '../../data/mockData.json';
import React from 'react';
import './MainPage.scss';

export const MainPage = () => {
  return (
    <div className="main">
      <SearchBar></SearchBar>
      <CardContainer data={mockData}></CardContainer>
    </div>
  );
};
