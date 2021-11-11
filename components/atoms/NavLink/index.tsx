import React from 'react';
import Link from 'next/link';
import { Props } from './navLink.props';

const NavLink: React.FC<Props> = ({ text, to }) => {
  return (
    <Link href={to}>
      <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 font-semibold hover:text-black mr-4 lg:px-3">
        {text}
      </a>
    </Link>
  );
};

export default React.memo(NavLink);
