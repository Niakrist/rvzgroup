"use client";
import React from "react";
import { ProductItem } from "@/components";
import { Htag } from "@/ui";
import styles from "./PopularProduct.module.css";
import { IBearing } from "@/types/bearing";

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface IPopularProduct {
  products: IBearing[];
}

export const PopularProduct = ({
  products,
}: IPopularProduct): React.JSX.Element => {
  if (!products) return <div>Загрузка</div>;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag tag="h2" size="medium">
          Популярные товары
        </Htag>
        <div className={styles.list}>
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              660: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
            }}
            navigation>
            {products.map(
              (product: IBearing) =>
                (product.price || product.priceRvz) && (
                  <SwiperSlide className={styles.item} key={product.id}>
                    <ProductItem product={product} />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
