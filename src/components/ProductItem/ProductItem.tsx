"use client";
import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { ArticleInStock, Price } from "@/components";
import { Button } from "@/ui";
import { AppDispatch, RootState } from "@/store/store";
import { isGetPriceModal } from "@/store/openModalSlice/openModalSlice";
import styles from "./ProductItem.module.css";
import { IBearing } from "@/types/bearing";
import { CounterQuantityGroup } from "../CounterQuantityGroup/CounterQuantityGroup";
import LabelList from "../LabelList/LabelList";
import { addInCommercialApplication } from "@/store/forCommercialApplicationSlice/forCommercialApplicationSlice";
import Image from "next/image";

interface IProductItemProps {
  product: IBearing;
  index?: number;
}

export const ProductItem = ({ product, index }: IProductItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { getPriceModal } = useSelector((state: RootState) => state.openModal);

  const handleGetCP = () => {
    dispatch(isGetPriceModal(!getPriceModal));
    dispatch(addInCommercialApplication({ product, count: 0 }));
  };

  return (
    <article className={styles.card}>
      <LabelList
        size={"small"}
        popular={product.popular}
        stock={product.stock}
        newProduct={product.new_product}
      />
      <Link href={`/product/${product.url}`} className={styles.imgLink}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.productImage}
            width={240}
            height={240}
            quality={75}
            priority={index ? index < 3 : false}
            loading={index && index > 2 ? "lazy" : "eager"}
            alt={product.h1}
            src={`/images/${product.images[0]}`}
          />
        </div>
      </Link>
      <ArticleInStock product={product} />
      <Link className={styles.link} href={`/product/${product.url}`}>
        Подшипник {product.name}
      </Link>
      <Price product={product} fontSize="fs16" className={styles.price} />
      <CounterQuantityGroup className={styles.counterQuantityGroup} product={product} />
      <Button
        className={styles.btn}
        onClick={handleGetCP}
        color="blackText"
        bgColor="border"
        size="small"
      >
        Получить КП в 1 клик
      </Button>
    </article>
  );
};
