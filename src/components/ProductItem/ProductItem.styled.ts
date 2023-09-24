import styled from 'styled-components';

export const ModelName = styled.p`
  font-weight: 700;
  margin-top: 20px;
`;
export const ModelTitle = styled.p`
  margin-top: 20px;
`;
export const PanelText = styled.p`
  display: inline-block;
  font-size: 16px;
`;
export const StyledPrice = styled.p`
  font-size: 32px;
  /* color: var(--accent-color); */
`;

export const StyledItem = styled.li`
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }
  @media screen and (max-width: 572px) {
    margin: 0 50px;
  }
`;

export const StyledItemContent = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const StyledImageBox = styled.div`
  position: relative;
  height: 256px;
  width: 200px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
