import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className="header">
        <nav className="nav">
          <NavLink
            end
            to="/"
            className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}
          >
            Main
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}
          >
            About
          </NavLink>
        </nav>
      </header>
    );
  }
}
