import { IconSvg } from 'components/IconSvg/IconSvg';
import { IconSvgName } from 'components/IconSvg/IconSvg.types';
import React from 'react';
import './Preloader.scss';

const Preloader = () => {
  return (
    <div className="container" data-testid="react-preloader">
      <IconSvg name={IconSvgName.preloader} className="preloader"></IconSvg>
    </div>
  );
};
export default Preloader;
