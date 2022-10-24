import { IconSvg } from 'components/IconSvg/IconSvg';
import React, { ReactNode } from 'react';
import './Modal.scss';

type ModalProps = {
  isOpen: boolean;
  handleClick: () => void;
  children: ReactNode;
};

export default class Modal extends React.Component<ModalProps> {
  render() {
    return (
      <>
        {this.props.isOpen && (
          <div className="modal" onClick={this.props.handleClick}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
              {this.props.children}
              <div className="modal__close" onClick={this.props.handleClick}>
                <IconSvg className="modal__close__btn" name="close"></IconSvg>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
