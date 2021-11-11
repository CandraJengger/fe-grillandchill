import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Props } from './navLogo.props';

const NavLogo: React.FC<Props> = ({ source, to = '#', width, height, alt }) => {
  return (
    <Link href={to}>
      <a>
        <Image src={source} width={width} height={height} alt={alt} />
      </a>
    </Link>
  );
};

export default React.memo(NavLogo);
