import styled from 'styled-components';

export const ProductBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 115px;
  max-height: 100vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    overflow-y: scroll;
    justify-content: flex-start;
  }
`;
export const StyledDescriptions = styled.div`
  margin-top: 40px;
  min-width: 400px;
  overflow-x: scroll;
`;
export const StyledPrice = styled.p`
  font-size: 32px;
  color: var(--text-color);
`;
export const DescriptionsBox = styled.div`
  overflow-y: scroll;
  width: 40%;
  padding: 16px;
  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */

  scrollbar-width: none;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    max-height: none;
    overflow-y: visible;
    width: 100%;
  }
`;
