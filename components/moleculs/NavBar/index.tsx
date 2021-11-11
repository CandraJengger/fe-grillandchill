import React, { useState } from 'react';
import { ButtonIcon, Gap, NavLink, NavLogo } from '../../atoms';

import IconCart from '../../../public/Navbar/cart.svg';
import DummyLogo from '../../../public/Navbar/dummy_logo.png';

interface LinkInterface {
  title: string;
  link: string;
}

const link = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Menu',
    link: '/',
  },
  {
    title: 'Tentang Kami',
    link: '/',
  },
  {
    title: 'Testimoni',
    link: '/',
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-3 lg:px-16">
      <div className="flex items-center flex-shrink-0 mr-6">
        <NavLogo source={DummyLogo} alt="Logo" to="/" />
      </div>
      <div className="flex lg:hidden">
        <ButtonIcon source={IconCart} alt="Icon Cart" />
        <Gap width="16px" height="4px" />
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-black"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          open ? 'block' : 'hidden'
        } flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow lg:flex lg:justify-center">
          {link?.map((item: LinkInterface) => (
            <NavLink text={item.title} to={item.link} key={item.title} />
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <ButtonIcon source={IconCart} alt="Icon Cart" />
      </div>
    </nav>
  );
};

export default NavBar;
