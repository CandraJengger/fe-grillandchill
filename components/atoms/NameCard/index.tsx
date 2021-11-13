import React from 'react';
import Image from 'next/image';
import { Text } from '..';
import { Props } from './nameCard.props';

const NameCard: React.FC<Props> = ({ image, name, address }) => {
  return (
    <figure className="flex">
      <Image
        src={image}
        height={54}
        width={54}
        className="rounded-full"
        loading="lazy"
        quality={75}
        alt={name}
      />
      <figcaption className="text-left pl-6 flex flex-col justify-center">
        <Text text={name} customStyles="text-lg font-semibold" />
        <Text text={address} customStyles="font-light" />
      </figcaption>
    </figure>
  );
};

export default NameCard;
