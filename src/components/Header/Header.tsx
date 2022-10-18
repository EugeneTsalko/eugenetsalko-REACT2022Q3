import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export class Header extends React.Component {
  render(): React.ReactNode {
    const links = [
      { path: '/', text: 'Main' },
      { path: '/form', text: 'Form' },
      { path: '/about', text: 'About' },
    ];

    return (
      <header className="header">
        <nav className="header__nav">
          {links.map((link, index) => (
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
  }
}
