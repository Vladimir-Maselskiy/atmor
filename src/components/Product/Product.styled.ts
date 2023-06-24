import styled from 'styled-components';

export const StyledPrice = styled.p`
  font-size: 32px;
  color: var(--text-color);
`;
export const DescriptionsBox = styled.div`
  overflow-y: scroll;
  width: 40%;
  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */

  scrollbar-width: none;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;
