import React from 'react';

export type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text?: string;
  children?: React.ReactNode;
  active?: boolean;
};
