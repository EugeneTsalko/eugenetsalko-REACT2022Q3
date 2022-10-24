import { ApiCard } from 'components/ApiCard/ApiCard.types';
import { CardContainer } from 'components/CardContainer/CardContainer';
import Preloader from 'components/Preloader/Preloader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import React from 'react';
import './MainPage.scss';

type MainPageProps = {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
};

type MainPageState = {
  cards: ApiCard[];
  isLoaded: boolean;
  isFirstRun: boolean;
};

export class MainPage extends React.Component<unknown, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {
      cards: [],
      isLoaded: false,
      isFirstRun: true,
    };
  }
  handleChange = (cardsArr: ApiCard[]) => {
    if (this.state.isFirstRun) {
      this.setState({ isFirstRun: false });
    }

    this.setState({ isLoaded: false });

    setTimeout(() => {
      this.setState({
        cards: cardsArr,
        isLoaded: true,
      });
    }, 1500);
  };

  showContent = () => {
    const { cards, isLoaded, isFirstRun } = this.state;
    if (isFirstRun) {
      return 'Please, type your search request in the search bar.';
    }

    if (isLoaded && !cards.length) {
      return 'Sorry, no results for your request.';
    }

    if (isLoaded) {
      return <CardContainer data={cards}></CardContainer>;
    }

    return <Preloader></Preloader>;
  };

  render() {
    return (
      <div className="main">
        <SearchBar onChange={this.handleChange}></SearchBar>
        {this.showContent()}
      </div>
    );
  }
}
