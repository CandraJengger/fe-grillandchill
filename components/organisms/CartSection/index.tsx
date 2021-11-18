import React from 'react';
import { Title } from '../../atoms';
import { CardCart, SummaryOrder } from '../../moleculs';

const CartSection = () => {
  return (
    <section
      id="cart"
      className="pt-16 lg:pt-32 relative overflow-hidden flex flex-col lg:flex-row justify-between px-6 lg:px-16"
    >
      <div className="flex-grow">
        <Title
          text="Keranjang Saya"
          customStyles="pl-0 text-center lg:text-left"
        />
        <div className=" pt-8">
          {[1, 2, 3].map((item: any) => (
            <CardCart key={item} />
          ))}
        </div>
      </div>
      <SummaryOrder />
    </section>
  );
};

export default CartSection;
