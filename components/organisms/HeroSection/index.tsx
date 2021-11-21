import React from 'react';
import Image from 'next/image';

import Dummy from '../../../public/Hero/dummy_hero.png';
import BottomRight from '../../../public/Hero/hero_bottom_right.svg';
import BottomLeft from '../../../public/Hero/hero_bottom_left.svg';
import { Gap } from '../../atoms';
import Fade from 'react-reveal/Fade';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-primary relative flex flex-col lg:flex-row justify-center items-center h-5/6 lg:h-4/5 rounded-b-4xl"
    >
      <div className="transform -translate-y-28 lg:translate-y-0 ">
        <Fade right duration={1000} delay={500} distance="100px">
          <h1 className="font-knewave text-5xl sm:text-7xl md:text-8xl lg:pl-24 lg:self-center">
            Nge-Grill <br /> <span className="pl-12 md:pl-24"> 24 jam</span>
          </h1>
        </Fade>
      </div>
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
