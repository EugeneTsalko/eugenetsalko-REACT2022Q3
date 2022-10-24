// import { Card } from 'components/Card/Card';
import ApiCard from 'components/ApiCard/ApiCard';
import React from 'react';
import './CardContainer.scss';
// import { ICard } from 'components/Card/Card.types';

// export class CardContainer extends React.Component<{ data: ICard[] }> {
//   render(): React.ReactNode {
//     return (
//       <div className="card-container">
//         {this.props.data.map((el) => (
//           <Card data={el} key={el.id}></Card>
//         ))}
//       </div>
//     );
//   }
// }

type CardContainerProps = {
  imgUrl: string;
  title: string;
  link: string;
};

export class CardContainer extends React.Component<{ data: CardContainerProps[] }> {
  render(): React.ReactNode {
    return (
      <>
        <div className="card-container">
          {this.props.data.map((el, index) => (
            <ApiCard data={el} key={index}></ApiCard>
          ))}
        </div>
      </>
    );
  }
}
