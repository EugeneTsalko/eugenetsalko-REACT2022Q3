import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import './ApiCard.scss';
import { ApiCardProps } from './ApiCard.types';

const ApiCard = (props: ApiCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { imgUrl, title, link } = props.data;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="apicard" onClick={openModal} data-testid="react-apicard">
        <img src={imgUrl} alt="" className="apicard__img" />
        <p className="apicard__title">Title: {title}</p>
      </div>
      {isOpen && (
        <Modal isOpen={true} handleClick={closeModal}>
          <img src={imgUrl} alt="" className="apicard__img__modal" />
          <p>Title: {title}</p>
          <a href={link} target="_blank" rel="noreferrer">
            Link
          </a>
        </Modal>
      )}
    </>
  );
};

export default ApiCard;
