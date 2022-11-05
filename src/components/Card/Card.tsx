import { CardProps } from 'components/Card/Card.types';
import { IconSvg } from 'components/IconSvg/IconSvg';
import { IconSvgName } from 'components/IconSvg/IconSvg.types';
import React from 'react';
import './Card.scss';

export const Card = (props: CardProps) => {
  const { img, title, price, subtitle, bedrooms, bathrooms, userImg, userName, userPhone } =
    props.data;
  return (
    <div className="card">
      <img className="card__img" src={img} alt={title} />
      <div className="card__description">
        <div className="card__description__title">
          <p className="card__description__title__name">{title}</p>
          <IconSvg
            name={IconSvgName.heart}
            className="card__description__title__bookmark"
          ></IconSvg>
        </div>
        <p className="card__description__price">${price.toLocaleString()}</p>
        <p className="card__description__subtitle">{subtitle}</p>
      </div>
      <div className="card__details">
        <div className="card__details__item">
          <IconSvg name={IconSvgName.bed} className="card__details__item__svg"></IconSvg>
          <span className="card__details__item__title">{bedrooms}</span>Bedrooms
        </div>
        <div className="card__details__item">
          <IconSvg name={IconSvgName.bath} className="card__details__item__svg"></IconSvg>
          <span className="card__details__item__title">{bathrooms}</span>Bathrooms
        </div>
      </div>
      <div className="card__contacts">
        <div className="card__contacts__title">Realtor</div>
        <div className="card__contacts__author">
          <img className="card__contacts__author__img" src={userImg} alt="realtor"></img>
          <div>
            <p className="card__contacts__author__name">{userName}</p>
            <p className="card__contacts__author__phone">{userPhone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
