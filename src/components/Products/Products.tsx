"use client";
import React from "react";
import { PaginationList, ProductItem, Icon } from "@/components";
import { toggleOpenMobileFilter } from "@/store/openModalSlice/openModalSlice";
import styles from "./Products.module.css";

import { IBearing } from "@/types/bearing";
import { useAppDispatch } from "@/store/store";

interface IProductsProps {
  bearingList: IBearing[];
}

const Products = ({ bearingList }: IProductsProps) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleOpenMobileFilter(true));
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleToggle} className={styles.filter}>
        <Icon name="iconFilter" className={styles.iconFilter} />
        <span className={styles.name}>Фильтр</span>
        <Icon name="iconArrow" className={styles.iconArrow} />
      </button>
      <ul className={styles.list}>
        {bearingList.map((product: IBearing) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
      <PaginationList />
    </div>
  );
};

export default Products;
