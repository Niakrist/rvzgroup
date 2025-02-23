"use client";
import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { ArticleInStock, Price } from "@/components";
import { Button } from "@/ui";
import { RootState } from "@/store/store";
import { toggleThanksModal } from "@/store/openModalSlice/openModalSlice";
import styles from "./ProductItem.module.css";
import { IBearing } from "@/types/types";

interface IProductItemProps {
  product: IBearing;
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
        <img
          className={styles.img}
          src={`http://localhost:4000/${product.images}`}
          alt=""
        />
      </div>
      <ArticleInStock product={product} />
      <Link className={styles.link} href="/catalog/product">
        Подшипник {product.name}
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
