import React from 'react';
import { Box } from '../Box/Box';
import Link from 'next/link';
import { HomeFilled } from '@ant-design/icons';
import { StyledLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight={35}
      justifyContent="center"
      backgroundColor="var(--accent-color)"
    >
      <StyledLink href="/home">
        <HomeFilled />
      </StyledLink>
      <StyledLink href="/home">ЧОМУ ATMOR</StyledLink>
      <StyledLink href="/home">ЗАСТОСУНОК</StyledLink>
      <StyledLink href="/home">ІНСТРУКЦІЇ</StyledLink>
    </Box>
  );
};
