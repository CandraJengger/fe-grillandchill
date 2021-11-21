import React from 'react';
import Image from 'next/image';
import { Text } from '..';
import { Props } from './nameCard.props';

const NameCard: React.FC<Props> = ({ name, address }) => {
  return (
    <figure className="flex">
      <figcaption className=" pl-6 flex flex-col justify-center text-center">
        <Text text={name} customStyles="text-lg font-semibold" />
        <Text text={address} customStyles="font-light" />
      </figcaption>
    </figure>
  );
};

export default NameCard;
