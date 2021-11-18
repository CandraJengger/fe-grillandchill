import React, { useEffect, useState } from 'react';
import { Button, Gap, Title } from '../../atoms';
import { CardExtraMenu, CardMenu } from '../../moleculs';
import { data } from '../../../data/data';
import { ExtraMenu, Packet } from '../../../@types/allTypes';
import Image from 'next/image';
import Vector from '../../../public/Menu/vec-1.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation]);

// modules styles
import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';

const MenuSection = () => {
  const [category, setCategory] = useState('makanan');
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="menu" className="pt-16 relative">
      <Title
        text="Menu Favorit"
        customStyles="pl-0 lg:pl-16 text-center lg:text-left"
      />
      <div className="flex flex-col sm:flex-row justify-cente max-w-max mx-auto mb-8">
        <Button
          text="Makanan"
          active={category === 'makanan'}
          onClick={() => setCategory('makanan')}
        />
        <Gap width="24px" height="16px" />
        <Button
          text="Minuman"
          active={category === 'minuman'}
          onClick={() => setCategory('minuman')}
        />
      </div>
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
        {category === 'makanan'
          ? data.packets.map((item: Packet, index: any) => (
              <SwiperSlide key={index}>
                <CardMenu
                  title={item.title}
                  menus={item.menus}
                  price={item.price}
                />
              </SwiperSlide>
            ))
          : data.extraMenus.map((item: ExtraMenu) => (
              <SwiperSlide key={item.title}>
                <CardExtraMenu
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
      </Swiper>
      <div className="absolute top-48 lg:top-28 -left-28 z-0">
        <Image src={Vector} width={700} height={600} />
      </div>
    </section>
  );
};

export default MenuSection;
