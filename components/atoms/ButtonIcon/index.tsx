import React from 'react';
import Image from 'next/image';
import { Props } from './buttonIcon.props';

const ButtonIcon: React.FC<Props & Record<string, any>> = ({
  onClick,
  source,
  alt,
  ...props
}) => {
  return (
    <button onClick={onClick} {...props}>
      <Image src={source} alt={alt} />
    </button>
  );
};

export default ButtonIcon;
