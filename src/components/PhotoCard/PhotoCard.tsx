import React from 'react';
import './PhotoCard.scss';
import { PhotoCardType } from './PhotoCard.types';
import { useNavigate } from 'react-router-dom';

export const PhotoCard = ({ imgUrl, title, id }: PhotoCardType) => {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(`/card/${id}`);
  };

  return (
    <>
      <div className="apicard" onClick={goToPage} data-testid="react-apicard" id={id}>
        <img src={imgUrl} alt="" className="apicard__img" />
        <p className="apicard__title">Title: {title}</p>
      </div>
    </>
  );
};
