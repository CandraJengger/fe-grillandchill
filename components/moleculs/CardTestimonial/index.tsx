import React from 'react';
import { Gap, NameCard, Text } from '../../atoms';
import { Props } from './cardTestimonial.props';

const CardTestimonial: React.FC<Props> = ({ image, name, address, review }) => {
  return (
    <article className="text-center flex flex-col items-center px-6">
      <Text text={`“${review}“`} />
      <Gap height="64px" width="20px" />
      <NameCard image={image} name={name} address={address} />
    </article>
  );
};

export default CardTestimonial;
