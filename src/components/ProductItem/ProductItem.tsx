"use client";
import { toggleThanksModal } from "@/store/openModalSlice/openModalSlice";
import { RootState } from "@/store/store";
import { IProduct } from "@/types/product";
import { Button } from "@/ui";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ProductItem.module.css";
import { ArticleInStock, Price } from "@/components";

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
        <img className={styles.img} src={`/${product.img}`} alt="" />
      </div>
      <ArticleInStock product={product} />
      <Link className={styles.link} href="/catalog/product">
        {product.name}
      </Link>
      <Price product={product} fontSize="fs16" className={styles.price} />
      <Button className={styles.btn} color="blue" size="big">
        В корзину
      </Button>
      <Button onClick={handleGetCP} color="border" size="big">
        Получить КП в 1 клик
      </Button>
    </article>
  );
};
