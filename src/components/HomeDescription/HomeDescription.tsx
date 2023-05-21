import React from 'react';
import { StyledText } from './HomeDescription.styled';
import { Box } from '../Box/Box';

export const HomeDescription = () => {
  return (
    <Box display="flex" justifyContent="center" padding="30px 0">
      <StyledText>
        Гаряча вода. <span>За Вашою потребою.</span>
      </StyledText>
    </Box>
  );
};
