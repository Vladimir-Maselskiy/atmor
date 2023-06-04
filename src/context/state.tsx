'use client';
import { ICartItem } from '@/interfaces/interfaces';
import { createContext, useContext, useState } from 'react';

type Props = {
  children?: JSX.Element;
};

interface ICartContext {
  cart: ICartItem[];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
}

const CartContext = createContext<ICartContext | null>(null);

export function CartWrapper({ children }: Props) {
  const [cart, setCart] = useState<ICartItem[]>([]);
  let sharedState = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={sharedState}>{children}</CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      'useCartContext has to be used within <useCartContext.Provider>'
    );
  }
  return context;
}
