"use client";
import {
  addToCart,
  changeInCart,
  decrementCart,
  deleteFromCart,
} from "@/store/cartSlice/cartSlice";
import { AppDispatch, RootState } from "@/store/store";
import { IBearing } from "@/types/bearing";
import { ICartItem } from "@/types/cartItem.interface";
import { Button } from "@/ui";
import { saveCartInLocalStorage } from "@/utils/localstorage";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CounterQuantity } from "../CounterQuantity/CounterQuantity";
import cn from "classnames";

import styles from "./CounterQuantityGroup.module.css";

interface ICounterQuantityGroupProps {
  product: IBearing;
  className?: string;
}

export const CounterQuantityGroup = ({
  product,
  className,
}: ICounterQuantityGroupProps) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector((state: RootState) => state.cart);
  const isProductInCart = cart.find((item) => item.product.id === product.id);

  const addInCart = (elem: ICartItem) => {
    if (isProductInCart?.count) {
      router.push(`/cart`);
    } else {
      saveCartInLocalStorage(elem);
      dispatch(addToCart(elem));
    }
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isProductInCart) return;
    const value = e.target.value;
    if (/^\d+$/.test(value)) {
      const parsedValue = parseInt(value, 10);
      dispatch(
        changeInCart({ product: isProductInCart.product, count: parsedValue })
      );
    }
  };

  const handleIncrement = () => {
    if (!isProductInCart) return;
    dispatch(addToCart({ product: isProductInCart.product, count: 1 }));
  };

  const handleDecrement = () => {
    if (!isProductInCart) return;
    if (isProductInCart.count > 1) {
      dispatch(decrementCart({ product: isProductInCart.product }));
    } else {
      dispatch(deleteFromCart({ product: isProductInCart.product }));
    }
  };

  return (
    <div className={cn(styles.countButtonGroup, className)}>
      {!!isProductInCart?.count && (
        <CounterQuantity
          handleChangeQuantity={handleChangeQuantity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          count={isProductInCart.count}
          size="medium"
          bgColor="grey"
        />
      )}
      <Button
        onClick={() => addInCart({ product, count: 1 })}
        className={styles.button}
        bgColor="blue"
        color="whiteText"
        size="small">
        {isProductInCart?.count ? "Перейти в корзину" : "Добавить в корзину"}
      </Button>
    </div>
  );
};
