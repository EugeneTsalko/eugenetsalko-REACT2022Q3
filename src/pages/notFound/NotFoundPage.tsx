import React from 'react';
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="main">
      <section className="page404">
        <div className="page404__container">
          <div className="page404__container__scene">
            <h1>404</h1>
          </div>

          <div className="page404__container__details">
            <h3>Look like you`re lost</h3>
            <p>the page you are looking for not avaible!</p>
            <a href="/">Go to Home</a>
          </div>
        </div>
      </section>
    </div>
  );
};
