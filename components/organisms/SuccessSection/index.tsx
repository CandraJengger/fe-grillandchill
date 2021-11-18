import React from 'react';
import { Button, Gap, Text } from '../../atoms';
import Image from 'next/image';
import Dummy from '../../../public/Success/dummy.png';
import { useRouter } from 'next/router';

const SuccessSection = () => {
  const router = useRouter();

  return (
    <section
      id="success"
      className="flex flex-col justify-center items-center text-center p-6 pt-16"
    >
      <div className="mb-20 mt-16 md:mt-28">
        <Image src={Dummy} height={280} width={260} />
      </div>
      <h2 className="text-4xl font-bold">Ah yes it’s success!</h2>
      <Gap height="12px" width="20px" />
      <div className=" max-w-sm">
        <Text>
          Pesanan anda akan kami kirimkan saat ini juga so now please sit tight
          and be ready for it
        </Text>
      </div>
      <Gap height="40px" width="20px" />
      <Button text="Kembali ke Home" active onClick={() => router.push('/')} />

      <Gap height="90px" width="20px" />
    </section>
  );
};

export default SuccessSection;
