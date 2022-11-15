import React from 'react';
import './FormCard.scss';
import { Person } from './FormCard.types';

const THUMBNAIL =
  'https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg';

export const PersonCard = ({ firstName, lastName, birthDate, location, sex, photo }: Person) => {
  return (
    <div className="person-card">
      <img className="person-card__img" src={photo || THUMBNAIL}></img>
      <p className="person-card__info">
        <span>Name:</span>
        {firstName}
      </p>
      <p className="person-card__info">
        <span>Surname:</span>
        {lastName}
      </p>
      <p className="person-card__info">
        <span>Birth date:</span>
        {birthDate}
      </p>
      <p className="person-card__info">
        <span>Location:</span>
        {location}
      </p>
      <p className="person-card__info">
        <span>Sex:</span>
        {sex}
      </p>
    </div>
  );
};
