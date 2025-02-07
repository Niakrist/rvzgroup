"use client";
import { toggleThanksModal } from "@/store/openModalSlice/openModalSlice";
import { RootState } from "@/store/store";
import { IProduct } from "@/types/product";
import { Button } from "@/ui";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from "./ProductItem.module.css";

interface IProductItemProps {
  product: IProduct;
}

export const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { isThanksModal } = useSelector((state: RootState) => state.openModal);

  const handleGetCP = () => {
    console.log("isThanksModal: ", isThanksModal);
    dispatch(toggleThanksModal(!isThanksModal));
  };

  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={product.img} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.inStock}>
          <span className={product.inStock ? styles.green : styles.orange} />
          <span>{product.inStock ? "В наличие" : "Под заказ 1-3 дня"}</span>
        </div>
        <div className={styles.article}>Артикул: {product.article}</div>
      </div>
      <Link className={styles.link} href="#">
        {product.name}
      </Link>
      <div className={styles.price}>
        {!!product.inStock ? (
          <>
            <span>{product.price} ₽/шт.</span>
            {!!product.stock && (
              <span className={styles.stock}> {product.stock} ₽/шт.</span>
            )}
          </>
        ) : (
          "Цена по запросу"
        )}
      </div>
      <Button className={styles.btn} color="blue" size="big">
        В корзину
      </Button>
      <Button onClick={handleGetCP} color="border" size="big">
        Получить КП в 1 клик
      </Button>
    </article>
  );
};
