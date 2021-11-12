import React from 'react';
import { Props } from './button.props';

const Button: React.FC<Props & Record<string, any>> = ({
  children,
  onClick,
  text,
  ...props
}) => {
  const content = children || text;
  return (
    <button
      className="border border-black hover:bg-primary hover:border-primary py-3 px-8 
      rounded-4xl text-base text-black"
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
