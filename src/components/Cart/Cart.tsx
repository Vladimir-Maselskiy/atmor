'use client';
import { useCartContext } from '@/context/state';
import React, { useEffect, useRef } from 'react';
import { CartItem } from '../CartItem/CartItem';
import { ICartItem } from '@/interfaces/interfaces';
import { CartList } from './Cart.styled';
import { CartFooter } from '../CartFooter/CartFooter';
import { Box } from '../Box/Box';
import { Empty } from 'antd';
import Link from 'next/link';

export const Cart = () => {
  const { cart } = useCartContext();
  const cartFooterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cartFooterRef.current) {
      cartFooterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Box padding="115px 100px 50px">
      {cart.length > 0 ? (
        <CartList>
          {cart.map((cartItem: ICartItem) => (
            <CartItem key={cartItem.product.options.article} item={cartItem} />
          ))}
        </CartList>
      ) : (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{ height: 60 }}
          description={<span>В корзині немає товарів...</span>}
          style={{ marginTop: 20 }}
        >
          <Link href={'/products'}>
            <span style={{ textDecoration: 'underline' }}>
              Перейти до вибору нагрівачів
            </span>
          </Link>{' '}
        </Empty>
      )}
      <Box ref={cartFooterRef}>
        <CartFooter />
      </Box>
    </Box>
  );
};
