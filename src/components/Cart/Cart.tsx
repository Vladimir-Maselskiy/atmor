import { useCartContext } from '@/context/state';
import React from 'react';
import { CartItem } from '../CartItem/CartItem';
import { ICartItem } from '@/interfaces/interfaces';
import { CartList } from './Cart.styled';
import { CartFooter } from '../CartFooter/CartFooter';
import { Box } from '../Box/Box';

export const Cart = () => {
  const { cart } = useCartContext();
  return (
    <Box padding="0 100px">
      <CartList>
        {cart.map((cartItem: ICartItem) => (
          <CartItem key={cartItem.product.options.article} item={cartItem} />
        ))}
      </CartList>
      <CartFooter />
    </Box>
  );
};
