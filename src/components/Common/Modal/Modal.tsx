import { IconSvg } from 'components/Common/IconSvg/IconSvg';
import { IconSvgName } from 'components/Common/IconSvg/IconSvg.types';
import React from 'react';
import './Modal.scss';
import { ModalProps } from './Modal.types';

export const Modal = ({ isOpen, handleClick, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleClick}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            {children}
            <div className="modal__close" onClick={handleClick}>
              <IconSvg className="modal__close__btn" name={IconSvgName.close}></IconSvg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
