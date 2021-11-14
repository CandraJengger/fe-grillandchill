import React from 'react';
import { Title } from '../../atoms';
import { CardAdvantage } from '../../moleculs';
import { data } from '../../../data/data';
import { Advantage } from '../../../@types/allTypes';
import Fade from 'react-reveal/Fade';

const AdvantageSection = () => {
  return (
    <section id="advantage" className="pt-12 relative pb-16 bg-primary">
      <Fade
        left={true}
        bottom={false}
        duration={1000}
        delay={500}
        distance="30px"
      >
        <Title
          text="Menu Favorit"
          customStyles="pl-0 lg:pl-16 text-center lg:text-left"
        />
      </Fade>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        {data.advantage.map((item: Advantage, index: any) => (
          <Fade bottom duration={1000} delay={500 * index} distance="30px">
            <CardAdvantage key={index} image={item.image} title={item.title} />
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default AdvantageSection;
