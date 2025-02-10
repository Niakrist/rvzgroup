"use client";
import { ArticleInStock, CounterQuantity } from "@/components";
import { products } from "@/mockdata/mockdata";
import React, { useState } from "react";
import styles from "./CartList.module.css";

export const CartList = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d+$/.test(value)) {
      const parsedValue = parseInt(value, 10);
      setQuantity(parsedValue);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <section>
      <ul className={styles.list}>
        {products.map((item) => (
          <li className={styles.item} key={item.article}>
            <div className={styles.wrapper}>
              <img className={styles.img} src={`/${item.img}`} alt="" />
              <div className={styles.info}>
                <h3 className={styles.tittle}>{item.name}</h3>
                <ArticleInStock product={item} />
              </div>
            </div>
            <div className={styles.priceInfo}>
              <CounterQuantity
                quantity={quantity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleChangeQuantity={handleChangeQuantity}
              />

              <div className={item.price ? styles.price : styles.zakaz}>
                {!!item.price ? item.price + " ₽/шт." : "Под заказ"}
              </div>
              <button className={styles.removeProduct} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
