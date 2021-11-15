import React from 'react';
import { ButtonIcon, Text, Title } from '../../atoms';
import Image from 'next/image';
import Icon from '../../../public/Cart/trash.svg';

const CardCart = () => {
  return (
    <div className="border-b border-gray-600 mb-9">
      <Title text="Paket 1: 2-3" as="h3" />
      <Text text="Rp. 199.000" />
      <div className="flex justify-start items-center mt-5 mb-9">
        <div className="flex justify-between items-center h-10 border border-gray-600 w-36 ">
          <button className="flex-grow flex justify-center items-center text-xl text-gray-400">
            -
          </button>
          <input
            type="number"
            className="w-14 text-center focus:border-none focus:outline-none"
            placeholder="0"
          />
          <button className=" flex-grow flex justify-center items-center text-xl font-semibold">
            +
          </button>
        </div>
        <ButtonIcon source={Icon} alt="Trash" customStyles="ml-8" />
      </div>
    </div>
  );
};

export default CardCart;
