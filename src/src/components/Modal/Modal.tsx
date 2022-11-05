import { IconSvg } from 'components/IconSvg/IconSvg';
import { IconSvgName } from 'components/IconSvg/IconSvg.types';
import React from 'react';
import './Modal.scss';
import { ModalProps } from './Modal.types';

const Modal = (props: ModalProps) => {
  return (
    <>
      {props.isOpen && (
        <div className="modal" onClick={props.handleClick}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            {props.children}
            <div className="modal__close" onClick={props.handleClick}>
              <IconSvg className="modal__close__btn" name={IconSvgName.close}></IconSvg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
