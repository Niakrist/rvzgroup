"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { PaginationList, ProductItem, Icon } from "@/components";
import { toggleOpenMobileFilter } from "@/store/openModalSlice/openModalSlice";
import styles from "./Products.module.css";
import { fetchBearingList } from "@/store/bearingsSlice/bearingsSlice";
import { RootState, useAppDispatch } from "@/store/store";
import { IBearing } from "@/types/types";

const Products = ({ bearingList }) => {
  const dispatch = useAppDispatch();
  // const { bearingList } = useSelector((state: RootState) => state.bearingList);

  const handleToggle = () => {
    dispatch(toggleOpenMobileFilter(true));
  };

  // useEffect(() => {
  //   dispatch(fetchBearingList());
  // }, []);

  // console.log("bearingList: ", bearingList);

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
