import Modal from 'components/Modal/Modal';
import React, { ReactNode } from 'react';
import './ApiCard.scss';

type ApiCardProps = {
  imgUrl: string;
  title: string;
  link: string;
};

type ApiCardState = {
  isOpen: boolean;
  children: ReactNode | null;
};

export default class ApiCard extends React.Component<{ data: ApiCardProps }, ApiCardState> {
  constructor(props: { data: ApiCardProps }) {
    super(props);
    this.state = {
      isOpen: false,
      children: null,
    };
  }
  openModal = (event: React.MouseEvent) => {
    const node = event.target as unknown as ReactNode;
    this.setState({ isOpen: true, children: node });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { imgUrl, title, link } = this.props.data;
    const { isOpen } = this.state;
    return (
      <>
        <div className="apicard" onClick={this.openModal}>
          <img src={imgUrl} alt="" className="apicard__img" />
          <p className="apicard__title">Title: {title}</p>
        </div>
        {isOpen && (
          <Modal isOpen={true} handleClick={this.closeModal}>
            <img src={imgUrl} alt="" className="apicard__img__modal" />
            <p>Title: {title}</p>
            <a href={link} target="_blank" rel="noreferrer">
              Link
            </a>
          </Modal>
        )}
      </>
    );
  }
}
