import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const LINKS = [
  { path: '/', text: 'Main' },
  { path: '/form', text: 'Form' },
  { path: '/about', text: 'About' },
];

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        {LINKS.map((link, index) => (
          <NavLink
            end
            to={link.path}
            className={({ isActive }) =>
              isActive ? 'header__nav__link header__nav__link--active' : 'header__nav__link'
            }
            key={index}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
