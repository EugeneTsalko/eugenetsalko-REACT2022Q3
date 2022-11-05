import ApiCard from 'components/ApiCard/ApiCard';
import React from 'react';
import './CardContainer.scss';
import { CardContainerProps } from './CardContainer.types';

export const CardContainer = (props: CardContainerProps) => {
  return (
    <div className="card-container">
      {props.data.map((el, index) => (
        <ApiCard data={el} key={index}></ApiCard>
      ))}
    </div>
  );
};
