import React from 'react';
import { Box } from '../Box/Box';
import { Logo, LogoText } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { NavCart } from '../NavCart/NavCart';

export const Header = () => {
  return (
    <>
      <Box
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="space-between"
        padding="0 20px"
        minHeight={80}
      >
        <Logo />
        <LogoText />
        <NavCart />
      </Box>
      <NavBar />
    </>
  );
};
