import { ICartItem } from '@/interfaces/interfaces';

export const getTotalCartCost = (cart: ICartItem[]) => {
  return cart.reduce(
    (acc, item) => acc + item.product.options.price * item.quantity,
    0
  );
};
