import React, { useState } from 'react';
import { Button, Gap, Title } from '../../atoms';
import { CardMenu } from '../../moleculs';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { data } from '../../../data/data';
import { Packet } from '../../../@types/allTypes';
import Image from 'next/image';
import Vector from '../../../public/Menu/vec-1.svg';

// modules styles
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';

const MenuSection = () => {
  const [category, setCategory] = useState('makanan');

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
        {data.packets.map((item: Packet, index: any) => (
          <SwiperSlide key={index}>
            <CardMenu
              title={item.title}
              menus={item.menus}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 -left-28">
        <Image src={Vector} width={700} height={600} />
      </div>
    </section>
  );
};

export default MenuSection;
