import { Advantage, Packet } from '../@types/allTypes';
interface Data {
  packets: Packet[];
  advantage: Advantage[];
}

export const data = {
  packets: [
    {
      title: 'Paket 1: 2-3 orang',
      menus: [
        '150 GR Premium Shorplate Beef',
        '200 GR Chicken Filet',
        '100 GR Side dish',
        '4 Variant Saus',
        '1 Sesame Oil',
        '3 Sumpit + Paper Plate',
        '1 Pack Selada Bombai',
        '1 Set Grill Pan + Gas',
      ],
      price: '99K',
    },
    {
      title: 'Paket 2: 3-5 orang',
      menus: [
        '150 GR Premium Shorplate Beef',
        '200 GR Chicken Filet',
        '100 GR Side dish',
        '4 Variant Saus',
        '1 Sesame Oil',
        '3 Sumpit + Paper Plate',
        '1 Pack Selada Bombai',
        '1 Set Grill Pan + Gas',
      ],
      price: '199K',
    },
    {
      title: 'Paket 1: 3-7 orang',
      menus: [
        '150 GR Premium Shorplate Beef',
        '200 GR Chicken Filet',
        '100 GR Side dish',
        '4 Variant Saus',
        '1 Sesame Oil',
        '3 Sumpit + Paper Plate',
        '1 Pack Selada Bombai',
        '1 Set Grill Pan + Gas',
      ],
      price: '299K',
    },
    {
      title: 'Paket 1: 3-7 orang',
      menus: [
        '150 GR Premium Shorplate Beef',
        '200 GR Chicken Filet',
        '100 GR Side dish',
        '4 Variant Saus',
        '1 Sesame Oil',
        '3 Sumpit + Paper Plate',
        '1 Pack Selada Bombai',
        '1 Set Grill Pan + Gas',
      ],
      price: '299K',
    },
  ],
  advantage: [
    {
      image: 'https://source.unsplash.com/194x194',
      title: 'Dimana saja & Kapan saja',
    },
    {
      image: 'https://source.unsplash.com/194x194',
      title: 'Satu Set Alat Grill dapat dibawa 1 x 24 jam',
    },
    {
      image: 'https://source.unsplash.com/194x194',
      title: 'Kami antar sampai ke depan rumah',
    },
  ],
};
