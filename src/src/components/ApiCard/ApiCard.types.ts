import { ReactNode } from 'react';

export type ApiCard = {
  imgUrl: string;
  title: string;
  link: string;
};

type ApiCardData = {
  imgUrl: string;
  title: string;
  link: string;
};

export type ApiCardProps = {
  data: ApiCardData;
};

export type ApiCardState = {
  isOpen: boolean;
  children: ReactNode | null;
};
