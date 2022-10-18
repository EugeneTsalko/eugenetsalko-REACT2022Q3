import React from 'react';
import './PersonCard.scss';

interface IPersonProps {
  firstName: string | undefined;
  lastName: string | undefined;
  birthDate: string | undefined;
  location: string | undefined;
  dataAgree: boolean | undefined;
  sex: string | undefined;
  photo: string | undefined;
}

export default class PersonCard extends React.Component<{ data: IPersonProps }> {
  render() {
    return (
      <div className="person-card">
        <img
          className="person-card__img"
          src={
            this.props.data.photo ||
            'https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg'
          }
        ></img>
        <p className="person-card__info">
          <span>Name:</span>
          {this.props.data.firstName}
        </p>
        <p className="person-card__info">
          <span>Surname:</span>
          {this.props.data.lastName}
        </p>
        <p className="person-card__info">
          <span>Birth date:</span>
          {this.props.data.birthDate}
        </p>
        <p className="person-card__info">
          <span>Location:</span>
          {this.props.data.location}
        </p>
        <p className="person-card__info">
          <span>Sex:</span>
          {this.props.data.sex}
        </p>
      </div>
    );
  }
}
