import React from 'react';
import { Text, Title } from '../../atoms';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

import Dummy from '../../../public/AboutUs/dummy_about.png';

const AboutUsSection = () => {
  return (
    <section
      id="about-us"
      className="pt-14 grid grid-cols-1 lg:grid-cols-2 pb-20"
    >
      <div className="flex justify-center p-4 md:p-6">
        <Image src={Dummy} width={422} height={360} />
      </div>
      <div className="flex flex-col justify-center p-4 md:p-6 pt-10 md:pt-14 text-center xl:text-left">
        <Fade bottom duration={500}>
          <Title text="Lebih Dekat Dengan Kami" />
          <Text>
            Grill and Chill jogja adalah usaha yang bergerak dalam bidang
            makanan dan minuman dengan mengusung konsep grill and chill yang
            artinya pelanggan diberi kebebasan untuk memanggang di mana saja
            dengan teman-teman, kerabat atau keluarga.
          </Text>
        </Fade>
      </div>
    </section>
  );
};

export default AboutUsSection;
