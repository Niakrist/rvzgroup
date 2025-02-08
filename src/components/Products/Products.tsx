import React from "react";
import { products } from "../PopularProduct/PopularProduct.props";
import styles from "./Products.module.css";
import { IProduct } from "@/types/product";
import { ProductItem } from "../ProductItem/ProductItem";

const Products = () => {
  return (
    <>
      <ul className={styles.list}>
        {products.map((product: IProduct) => (
          <li key={product.article}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
