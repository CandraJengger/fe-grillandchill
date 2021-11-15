import React from 'react';
import { Title } from '../../atoms';
import { CardCart } from '../../moleculs';

const CartSection = () => {
  return (
    <section id="cart" className="pt-16 relative overflow-hidden">
      <Title
        text="Keranjang Saya"
        customStyles="pl-0 lg:pl-16 text-center lg:text-left"
      />
      <div className="px-16">

      {[1, 2, 3].map((item: any) => (
        <CardCart key={item} />
      ))}
      </div>
    </section>
  );
};

export default CartSection;
