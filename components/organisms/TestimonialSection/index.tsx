import React from 'react';
import { Gap, Title } from '../../atoms';
import { CardTestimonial } from '../../moleculs';
import { data } from '../../../data/data';
import Image from 'next/image';
import Vector from '../../../public/Testimonial/Vector.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Testimonial } from '../../../@types/allTypes';

SwiperCore.use([Pagination, Navigation]);

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="pt-16 relative pb-12">
      <Title
        text="Testimonial"
        customStyles="pl-0 lg:pl-16 text-center lg:text-left"
      />
      <Gap height="24px" width="20px" />
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        centeredSlides={true}
        className=" w-5/6 lg:w-4/6"
      >
        {data.testimonial.map((item: Testimonial, index: any) => (
          <SwiperSlide key={index} className="mb-28">
            <CardTestimonial
              image={item.image}
              name={item.name}
              review={item.review}
              address={item.address}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -top-48 -right-0 z-0">
        <Image src={Vector} width={300} height={600} className="z-0" />
      </div>
    </section>
  );
};

export default TestimonialSection;
