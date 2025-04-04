"use client";
import React from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem/CartItem";
import styles from "./CartList.module.css";

export const CartList = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  return (
    <section>
      <ul className={styles.list}>
        {cart.map((item) => (
          <CartItem key={item.product.id} cart={item} />
        ))}
      </ul>
    </section>
  );
};
