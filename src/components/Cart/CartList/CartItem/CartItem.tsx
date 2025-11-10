"use client";
import { ArticleInStock } from "@/components/ArticleInStock/ArticleInStock";
import { CounterQuantityForCart } from "@/components/CounterQuantityForCart/CounterQuantityForCart";
import { deleteFromCart } from "@/store/cartSlice/cartSlice";
import { AppDispatch } from "@/store/store";
import { IBearing } from "@/types/bearing";
import { ICartItem } from "@/types/cartItem.interface";
import { convertNumberInGroupNumber } from "@/utils/convertNumber";
import Image from "next/image";
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
        <div className={styles.imgWrapper}>
          <Image
            width={70}
            height={70}
            className={styles.img}
            src={`/images/${product.images[0]}`}
            alt={`Подшипник ${product.name}`}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>
            <Link href={`/product/${product.url}`}>Подшипник {product.name}</Link>
          </h3>
          <ArticleInStock product={product} />
        </div>
      </div>
      <div className={styles.priceInfo}>
        <CounterQuantityForCart cart={cart} size="large" bgColor="grey" />
        <div className={product.price || product.priceRvz ? styles.price : styles.zakaz}>
          {convertNumberInGroupNumber(product.price || product.priceRvz) + " ₽/шт." || "Под заказ"}
        </div>
        <button onClick={() => handleDeleteFromCart(product)} className={styles.removeProduct} />
      </div>
    </li>
  );
};
