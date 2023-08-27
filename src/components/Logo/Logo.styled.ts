import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  position: relative;
  aspect-ratio: 334/74;
  width: 334px;
  & {
    @media screen and (max-width: 480px) {
      width: 77%;
    }
  }
`;

export const StyledLogoText = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-left: 40px;

  & span {
    color: var(--accent-color);
  }
`;
