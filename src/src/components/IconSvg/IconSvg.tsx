import React from 'react';
import { IconSvgName, Props } from './IconSvg.types';

export const IconSvg = ({ name, className }: Props) => {
  switch (name) {
    case IconSvgName.heart:
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
        </svg>
      );

    case IconSvgName.bed:
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
        </svg>
      );

    case IconSvgName.bath:
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
          ></path>
        </svg>
      );

    case IconSvgName.preloader:
      return (
        <svg className={className} viewBox="0 0 340 340">
          <circle cx="170" cy="170" r="160" stroke="#FF8787" />
          <circle cx="170" cy="170" r="135" stroke="#4a5568" />
          <circle cx="170" cy="170" r="110" stroke="#FF8787" />
          <circle cx="170" cy="170" r="85" stroke="#4a5568" />
        </svg>
      );

    case IconSvgName.close:
      return (
        <svg className={className} viewBox="0 0 48 48">
          <rect width="48" height="48" fill="white" fillOpacity="0.01" />
          <path
            d="M14 14L34 34"
            stroke="#333"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 34L34 14"
            stroke="#333"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return <svg></svg>;
  }
};
