"use client";
import React from "react";
import { products } from "../PopularProduct/PopularProduct.props";
import styles from "./Products.module.css";
import { IProduct } from "@/types/product";
import { ProductItem } from "../ProductItem/ProductItem";
import { PaginationList } from "../PaginationList/PaginationList";
import { Icon } from "../Icon/Icon";
import { useDispatch } from "react-redux";
import { toggleOpenMobileFilter } from "@/store/openModalSlice/openModalSlice";

const Products = () => {
  const dispatch = useDispatch();

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
        {products.map((product: IProduct) => (
          <li key={product.article}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
      <PaginationList />
    </div>
  );
};

export default Products;
