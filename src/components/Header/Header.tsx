'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { Logo, LogoText } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { NavCart } from '../NavCart/NavCart';
import { useMediaQuery, useWindowWidth } from '@/hooks';

export const Header = () => {
  const isLogoText = useMediaQuery(890);

  return (
    <Box
      width="100vw"
      position="fixed"
      zIndex={3}
      backgroundColor="var(--grey-background-color)"
    >
      <Box
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="space-between"
        padding="0 25px 0 20px"
        height={80}
        maxHeight={80}
      >
        <Logo />
        {isLogoText && <LogoText />}
        <NavCart />
      </Box>
      <NavBar />
    </Box>
  );
};
