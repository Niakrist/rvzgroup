import React from "react";
import styles from "./Cart.module.css";
import { CartList } from "./CartList/CartList";
import { CartOrder } from "./CartOrder/CartOrder";

export const Cart = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CartList />
        <CartOrder />
      </div>
    </section>
  );
};
