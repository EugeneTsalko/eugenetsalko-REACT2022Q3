import { AboutPage } from './pages/about/AboutPage';
import { MainPage } from './pages/main/MainPage';
import { NotFoundPage } from './pages/notFound/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FormPage } from './pages/form/FormPage';

export const RoutesList = () => {
  const routesOptions = [
    { path: '/', element: <MainPage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '*', element: <NotFoundPage /> },
    { path: 'form', element: <FormPage /> },
  ];
  return (
    <Routes>
      {routesOptions.map((route, i) => (
        <Route path={route.path} element={route.element} key={i} />
      ))}
    </Routes>
  );
};
