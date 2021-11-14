import React from 'react';
import { Button, Gap, Text, Title } from '../../atoms';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

import Dummy from '../../../public/AboutUs/dummy_about.png';

const InvitationSection = () => {
  return (
    <section
      id="invitation"
      className="pt-24 grid grid-cols-1 xl:grid-cols-12 pb-20"
    >
      <div className="xl:col-start-2 xl:col-end-8 flex flex-col items-center xl:items-start text-center xl:text-left p-4 mb-12 md:p-6 pt-10 md:pt-14 lg:px-24 xl:p-6">
        <Fade left duration={750}>
          <Title>
            Ingin Nge-<i className="mr-3">grill</i> bebas bareng teman atau
            Keluarga ?
          </Title>
          <Text text="Segera pilih paket mu di Grill and Chill Jogja, dan lakukan Checkout sekarang !! Dan nikmati waktumu bersama teman, sahabat, atau keluarga dengan santai dan bahagia." />
          <Gap height="42px" width="20px" />
          <Button text="Pilih Menu" active />
        </Fade>
      </div>
      <div className="xl:col-start-8 xl:col-end-11 flex justify-center p-4 md:p-6 ">
        <Image src={Dummy} width={422} height={360} />
      </div>
    </section>
  );
};

export default InvitationSection;
