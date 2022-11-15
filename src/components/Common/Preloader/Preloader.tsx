import { IconSvg } from 'components/Common/IconSvg/IconSvg';
import { IconSvgName } from 'components/Common/IconSvg/IconSvg.types';
import React from 'react';
import './Preloader.scss';

export const Preloader = () => {
  return (
    <div className="container" data-testid="react-preloader">
      <IconSvg name={IconSvgName.preloader} className="preloader"></IconSvg>
    </div>
  );
};
