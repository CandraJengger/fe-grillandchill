import React from 'react';
import { Button, Text, Title } from '../../atoms';

const CardMenu = () => {
  return (
    <div className="max-w-sm rounded-3xl shadow-lg inline-block mx-4">
      <div className="p-6 flex items-center flex-col">
        <Title as="h3" text="Paket 1: 2 - 3 Orang" />
        <div>
          <ul className="text-center mt-3">
            <li className="font-light">150 GR Premium Shorplate Beef</li>
            <li className="font-light">200 GR Chicken Filet</li>
            <li className="font-light">100 GR Side dish</li>
            <li className="font-light">4 Variant Saus</li>
            <li className="font-light">1 Sesame Oil</li>
            <li className="font-light">3 Sumpit + Paper Plate</li>
            <li className="font-light">1 Pack Selada Bombai</li>
            <li className="font-light">1 Set Grill Pan + Gas</li>
          </ul>
        </div>
        <div className="w-full flex justify-between items-center mt-11">
          <Text variant="medium" text="99K" />
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
