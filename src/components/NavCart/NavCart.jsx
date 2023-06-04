import Link from 'next/link';
import React, { useEffect } from 'react';
import { Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCartContext } from '@/context/state';

export const NavCart = () => {
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data) setCart(JSON.parse(data));
  }, [setCart]);

  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link href="/cart">
      <Badge count={count} offset={[-5, 5]}>
        <Button
          type="primary"
          icon={<ShoppingCartOutlined style={{ fontSize: 30 }} />}
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'transparent',
            color: 'var(--text-color)',
            borderRadius: '50%',
            boxShadow: 'none',
          }}
        />
      </Badge>
    </Link>
  );
};
