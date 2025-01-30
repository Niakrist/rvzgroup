import { Button, Htag } from "@/ui";
import Link from "next/link";
import React from "react";
import styles from "./PopularProduct.module.css";
import { IProduct, products } from "./PopularProduct.props";

export const PopularProduct: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag size="medium">Популярные товары</Htag>

        <ul className={styles.list}>
          {products.map((product) => (
            <li key={product.article} className={styles.item}>
              <article className={styles.card}>
                <div className={styles.imgWrapper}>
                  <img className={styles.img} src={product.img} alt="" />
                </div>
                <div className={styles.info}>
                  <div className={styles.inStock}>
                    <span
                      className={product.inStock ? styles.green : styles.orange}
                    />
                    <span>
                      {product.inStock ? "В наличие" : "Под заказ 1-3 дня"}
                    </span>
                  </div>
                  <div className={styles.article}>
                    Артикул: {product.article}
                  </div>
                </div>
                <Link className={styles.link} href="#">
                  {product.name}
                </Link>
                <div className={styles.price}>
                  {!!product.inStock ? (
                    <>
                      <span>{product.price} ₽/шт.</span>
                      {!!product.stock && (
                        <span className={styles.stock}>
                          {" "}
                          {product.stock} ₽/шт.
                        </span>
                      )}
                    </>
                  ) : (
                    "Цена по запросу"
                  )}
                </div>
                <Button className={styles.btn} color="blue" size="big">
                  В корзину
                </Button>
                <Button color="border" size="big">
                  Получить КП в 1 клик
                </Button>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
