import styled from 'styled-components';

type TProps = {
  photoQuantity: number;
};

export const PreviewPhotosList = styled.ul<TProps>`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: ${p => `${100 * p.photoQuantity + (p.photoQuantity - 1) * 40}px`};
  margin-inline: auto;
`;
export const PreviewPhotosItem = styled.li`
  position: relative;
  width: 100px;
  aspect-ratio: 0.85;
`;
