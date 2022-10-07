import { Card } from 'components/card/Card';
import { houses } from 'data/data';
import React from 'react';
import './CardContainer.scss';

export class CardContainer extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="card-container">
        <Card data={houses[0]}></Card>
        <Card data={houses[1]}></Card>
        <Card data={houses[2]}></Card>
        <Card data={houses[3]}></Card>
        <Card data={houses[4]}></Card>
        <Card data={houses[5]}></Card>
        <Card data={houses[6]}></Card>
        <Card data={houses[7]}></Card>
      </div>
    );
  }
}
