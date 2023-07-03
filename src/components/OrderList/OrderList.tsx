import React from 'react';
import { Box } from '../Box/Box';
import { useCartContext } from '@/context/state';
import { OrderItemsTitle, OrderListStyled } from './OrderList.styled';
import { getTotalCartCost } from '@/utils/getTotalCartCost';
import { getPriceSpacesFormatted } from '@/utils/getPriceSpacesFormatted';
import { OrderItem } from '../OrderItem/OrderItem';

export const OrderList = () => {
  const { cart } = useCartContext();
  return (
    <Box>
      <OrderItemsTitle>ТОВАРИ В ЗАМОВЛЕННІ</OrderItemsTitle>
      <OrderListStyled>
        {cart.map(item => (
          <OrderItem key={item.product.options.article} item={item} />
        ))}
      </OrderListStyled>
      <OrderItemsTitle>
        Вартість замовлення: {getPriceSpacesFormatted(getTotalCartCost(cart))}
        &nbsp; грн
      </OrderItemsTitle>
    </Box>
  );
};
