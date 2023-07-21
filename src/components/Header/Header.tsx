'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { Logo, LogoText } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { NavCart } from '../NavCart/NavCart';

export const Header = () => {
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
        minHeight={80}
      >
        <Logo />
        <LogoText />
        <NavCart />
      </Box>
      <NavBar />
    </Box>
  );
};
