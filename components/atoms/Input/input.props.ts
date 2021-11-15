import React from 'react';
type OwnProps = {
  inputLabel?: string;
};

export type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  OwnProps;
