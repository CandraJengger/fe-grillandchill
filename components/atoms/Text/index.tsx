import React from 'react';
import { Props } from './text.props';

const Text: React.FC<Props> = ({
  text,
  variant = 'base',
  children,
  customStyles,
}) => {
  const content = children || text;
  return (
    <p
      className={`${
        variant === 'base'
          ? 'text-base'
          : variant === 'large'
          ? 'text-3xl font-semibold'
          : variant === 'medium'
          ? 'text-xl'
          : variant === 'small'
          ? 'text-sm'
          : 'text-base font-semibold'
      } ${customStyles}`}
    >
      {content}
    </p>
  );
};

export default Text;
