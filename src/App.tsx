import { Header } from './components/header/Header';
import { AboutPage } from './pages/about/AboutPage';
import { MainPage } from './pages/main/MainPage';
import { NotFoundPage } from './pages/notFound/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
