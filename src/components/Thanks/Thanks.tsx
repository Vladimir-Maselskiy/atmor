'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { Empty } from 'antd';

export const Thanks = () => {
  return (
    <Box pt={115} pb={115}>
      <p
        style={{
          color: 'var(--accent-color)',
          fontSize: 36,
          marginTop: 50,
          textAlign: 'center',
        }}
      >
        Дякуємо за замовлення. Ми скоро зв&apos;яжемося з Вами!
      </p>
    </Box>
  );
};
