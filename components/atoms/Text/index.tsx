import React from 'react';
import { Props } from './text.props';

const Text: React.FC<Props> = ({ text, variant = 'base' }) => {
  return (
    <p
      className={`${
        variant === 'base'
          ? 'text-base'
          : variant === 'medium'
          ? 'text-3xl font-semibold'
          : 'text-base font-semibold'
      }`}
    >
      {text}
    </p>
  );
};

export default Text;
