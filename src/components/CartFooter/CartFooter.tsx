import { useCartContext } from '@/context/state';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import { getTotalCartCost } from '@/utils/getTotalCartCost';
import React from 'react';
import { Box } from '../Box/Box';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export const CartFooter = () => {
  const { cart } = useCartContext();
  const router = useRouter();
  const totalCartCost = getPriceSpacesFormatted(getTotalCartCost(cart));

  const onContinueShopingButtonClick = () => {
    router.push('./products');
  };
  const onToOrderButtonClick = () => {
    router.push('./order');
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      border="2px solid var(--grey-border-color)"
      py={20}
      px={100}
    >
      <Box>
        <Button
          onClick={onContinueShopingButtonClick}
          style={{
            color: 'var(--text-color)',
            borderRadius: 0,
          }}
        >
          Продовжити вибір
        </Button>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <p>Вартість замовлення: {totalCartCost}грн</p>
        <Button
          onClick={onToOrderButtonClick}
          style={{
            marginTop: 20,
            backgroundColor: 'var(--accent-color)',
            color: 'var(--white-color)',
            borderRadius: 0,
          }}
        >
          Оформити замовлення
        </Button>
      </Box>
    </Box>
  );
};
