import { PhotoCard } from 'components/PhotoCard/PhotoCard';
import React from 'react';
import './CardContainer.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const CardContainer = () => {
  const { cards } = useSelector((state: RootState) => state.mainReducer);

  return (
    <div className="card-container" data-testid="react-card-container">
      {cards.map((el, index) => (
        <PhotoCard {...el} key={index}></PhotoCard>
      ))}
    </div>
  );
};
