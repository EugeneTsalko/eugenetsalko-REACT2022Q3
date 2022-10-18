import React from 'react';
import './App.scss';
import { RoutesList } from 'RoutesList';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <RoutesList />
    </>
  );
}

export default App;
