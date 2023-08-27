'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { StyledLink, StyledLogoText } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLink href="/">
      <Image
        src="/logo-removebg.png"
        alt="logo"
        style={{ transform: 'translateY(3px)' }}
        fill
      />
    </StyledLink>
  );
};
export const LogoText = () => {
  return (
    <StyledLogoText>
      Найкращий вибір. <span>Електричний проточний водонагрівач.</span>
    </StyledLogoText>
  );
};
