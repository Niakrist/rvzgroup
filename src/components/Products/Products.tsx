"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaginationList, ProductItem, Icon } from "@/components";
import { toggleOpenMobileFilter } from "@/store/openModalSlice/openModalSlice";
import { IProduct } from "@/types/product";
import { products } from "@/mockdata/mockdata";
import styles from "./Products.module.css";
import { fetchBearingList } from "@/store/bearingsSlice/bearingsSlice";
import { RootState } from "@/store/store";

const Products = () => {
  const dispatch = useDispatch();
  const { bearingList } = useSelector((state: RootState) => state.bearingList);

  const handleToggle = () => {
    dispatch(toggleOpenMobileFilter(true));
  };

  useEffect(() => {
    dispatch(fetchBearingList());
  }, []);

  console.log("bearingList: ", bearingList);

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
