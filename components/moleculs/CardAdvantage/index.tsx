import React from 'react';
import Image from 'next/image';
import { Text } from '../../atoms';
import { Props } from './cardAvantage.props';

const CardAdvantage: React.FC<Props & Record<string, any>> = ({
  image,
  title,
}) => {
  return (
    <article className="w-52 flex flex-col items-center mx-8 lg:mx-14 my-6 xl:mx-24">
      <Image src={image} width={194} height={194} />
      <div className="pt-9 text-center">
        <Text text={title} variant="medium" />
      </div>
    </article>
  );
};

export default CardAdvantage;
