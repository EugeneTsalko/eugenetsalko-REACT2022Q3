import React from 'react';
import './PersonCard.scss';
import { PersonCardProps } from './PersonCard.types';

const PersonCard = (props: PersonCardProps) => {
  const thumbnail =
    'https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg';
  return (
    <div className="person-card">
      <img className="person-card__img" src={props.data.photo || thumbnail}></img>
      <p className="person-card__info">
        <span>Name:</span>
        {props.data.firstName}
      </p>
      <p className="person-card__info">
        <span>Surname:</span>
        {props.data.lastName}
      </p>
      <p className="person-card__info">
        <span>Birth date:</span>
        {props.data.birthDate}
      </p>
      <p className="person-card__info">
        <span>Location:</span>
        {props.data.location}
      </p>
      <p className="person-card__info">
        <span>Sex:</span>
        {props.data.sex}
      </p>
    </div>
  );
};

export default PersonCard;
