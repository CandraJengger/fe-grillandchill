import React from 'react';

export type Props = {
  text?: string;
  variant?: 'base' | 'medium' | 'large' | 'bold' | 'small';
  children?: React.ReactNode;
  customStyles?: string;
};
