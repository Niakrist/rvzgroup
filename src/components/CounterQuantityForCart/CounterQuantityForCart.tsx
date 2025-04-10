"use client";
import React from "react";
import { Icon } from "@/components";
import { ICounterQuantityProps } from "./CounterQuantityForCart.props";
import cn from "classnames";
import styles from "./CounterQuantityForCart.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import {
  addToCart,
  changeInCart,
  decrementCart,
} from "@/store/cartSlice/cartSlice";

export const CounterQuantityForCart = ({
  size,
  bgColor,
  cart,
}: ICounterQuantityProps): React.JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("value: ", typeof value);
    if (/^([1-9]\d*)$/.test(value)) {
      const parsedValue = parseInt(value, 10);
      dispatch(changeInCart({ product: cart.product, count: parsedValue }));
    }
  };

  const handleIncrement = () => {
    dispatch(addToCart({ product: cart.product, count: 1 }));
  };

  const handleDecrement = () => {
    if (cart.count > 1) {
      dispatch(decrementCart({ product: cart.product }));
    }
  };

  return (
    <div className={cn(styles.counterQuantity, styles[bgColor], styles[size])}>
      <button className={styles.button} onClick={handleDecrement}>
        <Icon name="iconMinus" className={styles.iconMinus} />
      </button>

      <input
        className={styles.input}
        type="text"
        value={cart.count}
        onChange={handleChangeQuantity}
      />
      <button className={styles.button} onClick={handleIncrement}>
        <Icon name="iconPlus" className={styles.iconPlus} />
      </button>
    </div>
  );
};
