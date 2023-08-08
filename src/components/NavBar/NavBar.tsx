import React, { useEffect, useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { HomeFilled } from '@ant-design/icons';
import { StyledNavBar, StyledLink, LinkWrapper } from './NavBar.styled';
import { useMediaQuery } from '@/hooks';

export const NavBar = () => {
  const isMoreThan768 = useMediaQuery(768);
  console.log('isMoreThan768', isMoreThan768);
  const [isBurgerToggled, setIsBurgerToggled] = useState(false);
  const [isShowNavBar, setIsShowNavbar] = useState(
    isBurgerToggled || isMoreThan768
  );

  useEffect(() => {
    if (isBurgerToggled || isMoreThan768) {
      setIsShowNavbar(true);
    } else {
      setIsShowNavbar(false);
    }
  }, [isMoreThan768]);

  useEffect(() => {
    if (isBurgerToggled && !isMoreThan768) {
      setIsShowNavbar(true);
    } else {
      setIsShowNavbar(false);
    }
  }, [isBurgerToggled]);

  const onHumburgerToggle = (isToggled: boolean) => {
    setIsBurgerToggled(isToggled);
  };

  const onLinkWrapperClick = () => {
    if (isBurgerToggled) {
      setIsBurgerToggled(false);
      setIsShowNavbar(false);
    }
  };

  return (
    <StyledNavBar>
      
        <LinkWrapper onClick={onLinkWrapperClick} isShowNavBar={isShowNavBar}>
          <StyledLink href="/">
            <HomeFilled />
          </StyledLink>
          <StyledLink href="/products">ПРОДУКТИ</StyledLink>
          <StyledLink href="/why-atmor">ЧОМУ ATMOR</StyledLink>
          <StyledLink href="/description">ЗАСТОСУНОК</StyledLink>
          <StyledLink href="/instruction">ІНСТРУКЦІЇ</StyledLink>
          <StyledLink href="/service">СЕРВІС</StyledLink>
          <StyledLink href="/contacts">КОНТАКТИ</StyledLink>
        </LinkWrapper>
     
      {!isMoreThan768 && (
        <Hamburger
          toggled={isBurgerToggled}
          size={20}
          color="var(--white-color)"
          onToggle={onHumburgerToggle}
        />
      )}
    </StyledNavBar>
  );
};
