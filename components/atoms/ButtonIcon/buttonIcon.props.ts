import React from 'react';

export type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  source: string;
  alt: string;
};
