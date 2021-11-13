import React from 'react';
import { Button, Text, Title } from '../../atoms';
import { Props } from './cardMenu.props';
import Image from 'next/image';

const CardMenu: React.FC<Props> = ({ title, menus = [], price }) => {
  return (
    <div className="max-w-sm rounded-3xl shadow-xl inline-block mx-4 my-9 bg-white">
      <div className="h-24 w-full mb-5">
        <Image
          src="https://source.unsplash.com/384x160"
          height={160}
          width={384}
          layout="responsive"
          objectFit="cover"
          className="rounded-t-3xl"
        />
      </div>
      <div className="p-6 flex items-center flex-col">
        <Title as="h3" text={title || 'Paket 1'} />
        <div>
          <ul className="text-center mt-3">
            {menus.map((menu: string) => (
              <li className="font-light">{menu}</li>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-between items-center mt-11">
          <Text variant="large" text={price || '0K'} />
          <Button>
            Tambah ke <br />
            Keranjang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
