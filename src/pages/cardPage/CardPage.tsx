import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { PhotoCard } from 'components/PhotoCard/PhotoCard';

export const CardPage = () => {
  const { id } = useParams();
  const { cards } = useSelector((state: RootState) => state.mainReducer);
  const filteredData = cards.find((item) => item.id === id);

  if (!filteredData) {
    return (
      <div>
        Data is not found.
        <Link to="/">Go home</Link>
      </div>
    );
  }
  return (
    <>
      <Link to="/">Go home</Link>
      <div>{filteredData?.title}</div>
      <PhotoCard imgUrl={filteredData?.imgUrl} title={filteredData?.title}></PhotoCard>
    </>
  );
};
