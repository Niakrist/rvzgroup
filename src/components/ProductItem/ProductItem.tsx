"use client";
import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { ArticleInStock, Price } from "@/components";
import { Button } from "@/ui";
import { AppDispatch, RootState } from "@/store/store";
import { toggleThanksModal } from "@/store/openModalSlice/openModalSlice";
import styles from "./ProductItem.module.css";
import { addToCart } from "@/store/cartSlice/cartSlice";
import { ICartItem } from "@/types/cartItem.interface";
import { IBearing } from "@/types/bearing";
import { saveCartInLocalStorage } from "@/utils/localstorage";

interface IProductItemProps {
  product: IBearing;
}

export const ProductItem = ({ product }: IProductItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isThanksModal } = useSelector((state: RootState) => state.openModal);

  const handleGetCP = () => {
    dispatch(toggleThanksModal(!isThanksModal));
  };

  const addInCart = (elem: ICartItem) => {
    saveCartInLocalStorage(elem);
    dispatch(addToCart(elem));
  };

  return (
    <article className={styles.card}>
      <Link href={`/product/${product.url}`} className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={`http://localhost:4000/${product.images}`}
          alt=""
        />
      </Link>
      <ArticleInStock product={product} />
      <Link className={styles.link} href={`/product/${product.url}`}>
        Подшипник {product.name}
      </Link>
      <Price product={product} fontSize="fs16" className={styles.price} />
      <Button
        onClick={() => addInCart({ product, count: 1 })}
        className={styles.btn}
        color="blue"
        size="big">
        В корзину
      </Button>
      <Button onClick={handleGetCP} color="border" size="big">
        Получить КП в 1 клик
      </Button>
    </article>
  );
};
