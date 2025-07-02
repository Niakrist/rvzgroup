"use client";
import React from "react";
import { PaginationList, ProductItem, Icon, TagCategory } from "@/components";
import { toggleOpenMobileFilter } from "@/store/openModalSlice/openModalSlice";
import styles from "./Products.module.css";

import { IBearing } from "@/types/bearing";
import { useAppDispatch } from "@/store/store";

interface IProductsProps {
  bearingList: IBearing[];
  count?: number;
}

const Products = ({ bearingList, count }: IProductsProps) => {
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
      <TagCategory />
      <ul className={styles.list}>
        {bearingList.map((product: IBearing, index: number) => (
          <li key={product.id}>
            <ProductItem product={product} index={index} />
          </li>
        ))}
      </ul>
      {count && count > 12 && <PaginationList count={count} />}
    </div>
  );
};

export default Products;
