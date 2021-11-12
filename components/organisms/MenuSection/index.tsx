import React from 'react';
import { Title } from '../../atoms';
import { CardMenu } from '../../moleculs';

const MenuSection = () => {
  return (
    <section id="menu">
      <Title text="Menu Favorit" />
      <div className="w-full overflow-x-auto">
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
      </div>
    </section>
  );
};

export default MenuSection;
