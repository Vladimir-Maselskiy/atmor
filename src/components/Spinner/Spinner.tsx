import React from 'react';
import { Box } from '../Box/Box';
import { Spin } from 'antd';

export const Spinner = () => {
  return (
    <Box
      display="flex"
      minHeight="100%"
      width="100vw"
      position="absolute"
      justifyContent="center"
      alignItems="center"
    >
      <Spin size="large" style={{ zIndex: 2 }} />
    </Box>
  );
};
