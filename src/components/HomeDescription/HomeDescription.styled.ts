import styled from 'styled-components';

export const StyledText = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-left: 40px;

  & span {
    color: var(--accent-color);
  }
`;
export const StyledDescripyion = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  & > span {
    display: inline-block;
    margin-left: 40px;
  }
`;
