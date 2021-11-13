import React from 'react';
import { Title } from '../../atoms';
import { CardAdvantage } from '../../moleculs';
import { data } from '../../../data/data';
import { Advantage } from '../../../@types/allTypes';

const AdvantageSection = () => {
  return (
    <section
      id="advantage"
      className="mt-16 pt-12 relative pb-16 mb-24 bg-primary"
    >
      <Title
        text="Menu Favorit"
        customStyles="pl-0 lg:pl-14 text-center lg:text-left"
      />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        {data.advantage.map((item: Advantage, index: any) => (
          <CardAdvantage key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default AdvantageSection;
