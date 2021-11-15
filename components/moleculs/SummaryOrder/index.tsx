import React from 'react';
import { Button, Input, Text, Title } from '../../atoms';

const SummaryOrder = () => {
  return (
    <aside className="rounded-3xl shadow-xl p-6 md:mx-6 mb-12 z-20 transform translate-y-4">
      <Title as="h3" text="Detail Pengiriman" customStyles="text-primary" />
      <div className="mt-4">
        <Input inputLabel="Nama Lengkap" placeholder="Masukkan Nama Anda" />
        <Input inputLabel="Alamat Pengiriman" placeholder="Masukkan Alamat" />
        <Input inputLabel="No. HP" placeholder="08xxxxx" type="tel" />
      </div>
      <ul className="pt-6 pb-3 h-40 border-t border-b border-gray-600 overflow-y-auto mt-9">
        <li className="flex justify-between py-1 px-2">
          <Text variant="small" text="Paket 1: 2 - 3 Orang" />
          <Text variant="small" text="Rp. 199.000" />
        </li>
        <li className="flex justify-between py-1 px-2">
          <Text variant="small" text="Paket 1: 2 - 3 Orang" />
          <Text variant="small" text="Rp. 199.000" />
        </li>
        <li className="flex justify-between py-1 px-2">
          <Text variant="small" text="Paket 1: 2 - 3 Orang" />
          <Text variant="small" text="Rp. 199.000" />
        </li>
        <li className="flex justify-between py-1 px-2">
          <Text variant="small" text="Paket 1: 2 - 3 Orang" />
          <Text variant="small" text="Rp. 199.000" />
        </li>
      </ul>
      <div className="flex justify-between py-5 border-b border-gray-600 mb-5">
        <Text variant="bold" text="Total Harga" />
        <Text variant="bold" text="Rp. 399.000" />
      </div>
      <div className="mb-11">
        <Text text="Pembayaran melalui:" customStyles=" font-semibold mb-3" />
        <Text text="BNI: XXXX XXX XXX" />
        <Text text="Link Aja: 08xxxxxx" />
      </div>

      <Button active text="Checkout" customStyles="w-full" />
    </aside>
  );
};

export default SummaryOrder;
