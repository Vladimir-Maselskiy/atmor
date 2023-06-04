'use client';
import { useCartContext } from '@/context/state';
import React, { useCallback } from 'react';

export default function Cart() {
  const { cart } = useCartContext();
  return cart.length > 0 ? <div>page</div> : null;
}
