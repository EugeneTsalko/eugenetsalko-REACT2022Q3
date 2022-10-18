import { Card } from 'components/Card/Card';
import React from 'react';
import './CardContainer.scss';
import { ICard } from 'components/Card/Card.types';

export class CardContainer extends React.Component<{ data: ICard[] }> {
  render(): React.ReactNode {
    return (
      <div className="card-container">
        {this.props.data.map((el) => (
          <Card data={el} key={el.id}></Card>
        ))}
      </div>
    );
  }
}
