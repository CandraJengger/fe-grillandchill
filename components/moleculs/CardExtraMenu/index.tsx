import React from 'react';
import { Button, Text, Title } from '../../atoms';
import Image from 'next/image';
import { Props } from './extraMenu.props';

const CardExtraMenu: React.FC<Props & Record<string, any>> = ({
  image,
  title,
  price,
}) => {
  return (
    <article className="card-extra-menu w-full max-w-xs rounded-3xl shadow-xl inline-block mx-5 my-9 bg-white transform hover:-translate-y-3 duration-150 p-6">
      <div className="mx-auto w-max">
        <Image src={image} height={120} width={120} />
      </div>
      <div className=" flex items-center flex-col mt-8">
        <Title as="h3" text={title} customStyles="text-center" />
        <div className="w-full flex justify-between items-center mt-2">
          <Text variant="large" text={price} />
          <Button>
            Tambah ke <br />
            Keranjang
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CardExtraMenu;
