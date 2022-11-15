import React from 'react';
import './App.scss';
import { RoutesList } from 'RoutesList';
import { Header } from './components/Header/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RoutesList />
    </Provider>
  );
}

export default App;
