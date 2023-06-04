'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { StyledLogoText } from './Logo.styled';
import { marginLeft } from 'styled-system';

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-removebg.png"
        alt="logo"
        width={334}
        height={74}
        style={{ transform: 'translateY(3px)' }}
      />
    </Link>
  );
};
export const LogoText = () => {
  return (
    <StyledLogoText>
      Найкращий вибір. <span>Електричний проточний водонагрівач.</span>
    </StyledLogoText>
  );
};
