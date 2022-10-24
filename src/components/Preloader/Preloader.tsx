import { IconSvg } from 'components/IconSvg/IconSvg';
import React from 'react';
import './Preloader.scss';

export default class Preloader extends React.Component {
  render() {
    return (
      <div className="container">
        <IconSvg name="preloader" className="preloader"></IconSvg>
      </div>
    );
  }
}
