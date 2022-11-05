import { ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  handleClick: () => void;
  children: ReactNode;
};
