import Link from 'next/link';
import styled from 'styled-components';

type TLinkWrapperProps = {
  isShowNavBar: boolean;
};

export const StyledNavBar = styled.div`
  position: relative;
  display: flex;
  background-color: var(--accent-color);
  border-bottom: 1px solid var(--text-color);
  height: 35px;
  max-height: 35px;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: end;
  }
`;
export const LinkWrapper = styled.div<TLinkWrapperProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: -1;
    bottom: 0px;
    transform: ${p => (p.isShowNavBar ? 'translateY(100%)' : 'translateY(0%)')};
    right: 0;
    flex-direction: column;
    align-items: center;
    width: 150px;
    transition: transform 0.5s ease-in-out;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0 20px;
  background-color: var(--accent-color);
  color: var(--white-color);
  font-weight: 700;
  transition: hover 2s;
  &:hover {
    background-color: black;
    color: var(--white-color);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 5px 0;
  }
`;
