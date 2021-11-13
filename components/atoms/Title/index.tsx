import React from 'react';
import { Props } from './title.props';

const Title: React.FC<Props> = ({
  as = 'h2',
  text,
  customStyles,
  children,
}) => {
  const Tag = as;

  const content = children || text;
  return (
    <Tag
      className={`${
        as === 'h2' ? 'text-4xl' : 'text-2xl'
      } font-semibold text-black mb-6 ${customStyles} z-30`}
    >
      {content}
    </Tag>
  );
};

export default Title;
