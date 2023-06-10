import { useCartContext } from '@/context/state';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import { getTotalCartCost } from '@/utils/getTotalCartCost';
import React from 'react';
import { Box } from '../Box/Box';
import { Button } from 'antd';

export const CartFooter = () => {
  const { cart } = useCartContext();
  const totalCartCost = getPriceSpacesFormatted(getTotalCartCost(cart));
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      border="2px solid var(--grey-border-color)"
      py={20}
    >
      <Box>
        <Button
          style={{
            color: 'var(--text-color)',
            borderRadius: 0,
          }}
        >
          Продовжити вибір
        </Button>
      </Box>
      <Box>
        <Button
          style={{
            backgroundColor: 'var(--accent-color)',
            color: 'var(--white-color)',
            borderRadius: 0,
          }}
        >
          Оформити замовлення
        </Button>
        <p>totalCost {totalCartCost}</p>
      </Box>
    </Box>
  );
};
