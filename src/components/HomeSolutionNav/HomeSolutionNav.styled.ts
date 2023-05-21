import styled from 'styled-components';

interface Props {
  position: number;
}

export const StyledImage = styled.img<Props>`
  position: absolute;
  width: 50%;
  height: 50%;
  ${p => {
    switch (p.position) {
      case 1:
        return 'right : 0; top : 0';
      case 2:
        return 'right : 0; bottom : 0';
      case 3:
        return 'left : 0; bottom : 0';
      case 4:
        return 'left : 0; top : 0';
    }
  }};
  transition: opacity 0.5s;
  &:hover {
    opacity: 0;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  background-image: url('/home-solutions-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top: 35px solid var(--accent-color);
  gap: 20px;
  & > p:nth-of-type(2) {
    color: var(--accent-color);
    text-align: left;
  }
`;
export const StyledSolutionText = styled.p`
  font-size: 50px;
  font-weight: 600;
  min-width: 300px;
  text-align: end;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
