"use client";
import { ArticleInStock } from "@/components/ArticleInStock/ArticleInStock";
import { CounterQuantityForCart } from "@/components/CounterQuantityForCart/CounterQuantityForCart";
import { deleteFromCart } from "@/store/cartSlice/cartSlice";
import { AppDispatch } from "@/store/store";
import { IBearing } from "@/types/bearing";
import { ICartItem } from "@/types/cartItem.interface";
import Link from "next/link";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";

interface ICartItemProps {
  cart: ICartItem;
}

export const CartItem = ({ cart }: ICartItemProps) => {
  const { product } = cart;
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteFromCart = (product: IBearing) => {
    dispatch(deleteFromCart({ product }));
  };

  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src={`http://localhost:4000/${product.images}`}
          alt=""
        />
        <div className={styles.info}>
          <h3 className={styles.title}>
            <Link href={`/product/${product.url}`}>
              Подшипник {product.name}
            </Link>
          </h3>
          <ArticleInStock product={product} />
        </div>
      </div>
      <div className={styles.priceInfo}>
        <CounterQuantityForCart cart={cart} size="large" bgColor="grey" />
        <div className={product.price ? styles.price : styles.zakaz}>
          {!!product.price ? product.price + " ₽/шт." : "Под заказ"}
        </div>
        <button
          onClick={() => handleDeleteFromCart(product)}
          className={styles.removeProduct}
        />
      </div>
    </li>
  );
};
