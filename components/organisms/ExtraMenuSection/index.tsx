import React, { useEffect, useState } from 'react';
import { Title } from '../../atoms';
import { CardExtraMenu } from '../../moleculs';
import Image from 'next/image';
import Vector from '../../../public/ExtraMenu/dummy.svg';
import { data } from '../../../data/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation]);

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import { ExtraMenu } from '../../../@types/allTypes';

const ExtraMenuSection = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 1023) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="extra-menu" className="pt-16 relative overflow-hidden">
      <Title
        text="Extra Menu"
        customStyles="pl-0 lg:pl-16 text-center lg:text-left"
      />
      <div className="hidden lg:flex justify-center flex-wrap">
        {data.extraMenus.map((item: ExtraMenu) => (
          <CardExtraMenu
            key={item.title}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      {!isDesktop && (
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          centeredSlides={true}
          centeredSlidesBounds={true}
          navigation={!isDesktop}
          breakpoints={{
            '540': {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            '1000': {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            '1240': {
              slidesPerView: 4,
              spaceBetween: 8,
            },
          }}
        >
          {data.extraMenus.map((item: ExtraMenu) => (
            <SwiperSlide key={item.title}>
              <CardExtraMenu
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="hidden lg:inline-block absolute bottom-48 -right-44 z-0">
        <Image src={Vector} width={700} height={600} />
      </div>
    </section>
  );
};

export default ExtraMenuSection;
