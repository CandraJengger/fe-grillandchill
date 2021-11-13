import React from 'react';
import { Text, Title } from '../../atoms';
import Image from 'next/image';

import Dummy from '../../../public/AboutUs/dummy_about.png';

const AboutUsSection = () => {
  return (
    <section
      id="about-us"
      className="mt-16 grid grid-cols-1 lg:grid-cols-2 mb-24"
    >
      <div className="flex justify-center p-4 md:p-6">
        <Image src={Dummy} width={422} height={360} />
      </div>
      <div className="flex flex-col justify-center p-4 md:p-6 pt-10 md:pt-14">
        <Title text="Lebih Dekat Dengan Kami" />
        <Text>
          Grill and Chill jogja adalah usaha yang bergerak dalam bidang makanan
          dan minuman dengan mengusung konsep grill and chill yang artinya
          pelanggan diberi kebebasan untuk memanggang di mana saja dengan
          teman-teman, kerabat atau keluarga.
        </Text>
      </div>
    </section>
  );
};

export default AboutUsSection;
