import React from 'react';
import { Props } from './text.props';

const Text: React.FC<Props> = ({ text, variant = 'base', children }) => {
  const content = children || text;
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
      {content}
    </p>
  );
};

export default Text;
