import React from 'react';
import { Gap, Text } from '../../atoms';

const Footer = () => {
  return (
    <footer className="bg-white flex flex-col sm:flex-row justify-between lg:px-16 pb-20">
      <div className="w-full sm:w-420 p-6">
        <p className="text-4xl text-primary font-bold">Grill and Chill Jogja</p>
        <Gap height="16px" width="10px" />
        <Text text="Ngabean Kulon, Sinduharjo, Ngaglik, Kec. Ngaglik, Kab. Sleman, Daerah Istimewa Yogyakarta" />
        <Gap height="24px" width="10px" />
        <Text text="+62 895-1503–1753" />
      </div>
      <div className="p-6">
        <Text text="@Grill and Chill Jogja 2020" />
      </div>
    </footer>
  );
};

export default Footer;
