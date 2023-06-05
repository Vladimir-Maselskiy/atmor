import { ICartItem } from '@/interfaces/interfaces';
import React from 'react';
import { StyledCartItem } from './CartItem.styled';

type TProps = {
  item: ICartItem;
};

export const CartItem = ({ item }: TProps) => {
  return <StyledCartItem>CartItem</StyledCartItem>;
};
