import React from 'react';

export type Props = {
  as?: keyof JSX.IntrinsicElements;
  text?: string;
  customStyles?: string;
  children?: React.ReactNode;
};
