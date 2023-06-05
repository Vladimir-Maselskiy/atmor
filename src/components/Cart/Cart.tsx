import { useCartContext } from '@/context/state';
import React from 'react';
import { CartItem } from '../CartItem/CartItem';
import { ICartItem } from '@/interfaces/interfaces';
import { CartList } from './Cart.styled';

export const Cart = () => {
  const { cart } = useCartContext();
  return (
    <CartList>
      {cart.map((cartItem: ICartItem) => (
        <CartItem key={cartItem.product.options.article} item={cartItem} />
      ))}
    </CartList>
  );
};
