import { ICartItem } from "@/types/cartItem.interface";

export const getTotalPrice = (cart: ICartItem[]): number => {
  return cart.reduce((acc, item) => {
    if (item.product.price !== null) {
      return (acc += item.product.price * item.count);
    } else {
      return acc;
    }
  }, 0);
};
