import React from 'react';
import { Props } from './button.props';

const Button: React.FC<Props & Record<string, any>> = ({
  children,
  onClick,
  text,
  active,
  ...props
}) => {
  const content = children || text;
  return (
    <>
      {active ? (
        <button
          className={`border border-black bg-primary hover:bg-yellow-300  py-3 px-8 
    rounded-4xl text-base text-black`}
          onClick={onClick}
          {...props}
        >
          {content}
        </button>
      ) : (
        <button
          className={`border border-black bg-white hover:bg-primary  py-3 px-8 
    rounded-4xl text-base text-black`}
          onClick={onClick}
          {...props}
        >
          {content}
        </button>
      )}
    </>
  );
};

export default Button;
