import React from 'react';
import Image from 'next/image';

import Dummy from '../../../public/Hero/dummy_hero.png';
import BottomRight from '../../../public/Hero/hero_bottom_right.svg';
import BottomLeft from '../../../public/Hero/hero_bottom_left.svg';
import { Gap } from '../../atoms';

const HeroSection = () => {
  return (
    <section className="bg-primary relative flex flex-col lg:flex-row justify-center items-center h-4/6 lg:h-3/5 rounded-b-4xl">
      <h1 className="font-knewave text-6xl sm:text-7xl md:text-8xl lg:pl-24 lg:self-center transform -translate-y-40 lg:translate-y-0 ">
        Nge-Grill <br /> <span className="pl-12 md:pl-24"> 24 jam</span>
      </h1>
      <div className="hidden lg:inline-block">
        <Gap width="110px" height="10px" />
      </div>
      <div className="absolute bottom-0 right-8 h-72 w-72 md:h-96 md:w-96 sm:right-14 md:right-24 lg:relative lg:right-0 lg:self-end ">
        <Image src={Dummy} alt="Dummy" layout="fill" objectFit="contain" />
      </div>
      <div className="absolute bottom-14 right-0 hidden lg:block">
        <Image src={BottomRight} alt="" />
      </div>
      <div className="absolute -bottom-2 left-0">
        <Image src={BottomLeft} alt="Dummy" />
      </div>
    </section>
  );
};

export default HeroSection;
