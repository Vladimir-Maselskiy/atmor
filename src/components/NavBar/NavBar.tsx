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
      minHeight="35px"
      justifyContent="center"
      backgroundColor="var(--accent-color)"
      borderBottom="1px solid var(--text-color)"
    >
      <StyledLink href="/">
        <HomeFilled />
      </StyledLink>
      <StyledLink href="/products">ПРОДУКТИ</StyledLink>
      <StyledLink href="/home">ЧОМУ ATMOR</StyledLink>
      <StyledLink href="/description">ЗАСТОСУНОК</StyledLink>
      <StyledLink href="/instruction">ІНСТРУКЦІЇ</StyledLink>
      <StyledLink href="/service">СЕРВІС</StyledLink>
      <StyledLink href="/contacts">КОНТАКТИ</StyledLink>
    </Box>
  );
};
