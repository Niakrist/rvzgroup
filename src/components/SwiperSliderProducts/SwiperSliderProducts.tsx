"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { IBearing } from "@/types/bearing";
import { Htag } from "@/ui";
import { ProductItem } from "../ProductItem/ProductItem";
import styles from "./SwiperSliderProducts.module.css";

interface IPopularProduct {
  products: IBearing[];
}

export const SwiperSliderProducts = ({
  products,
}: IPopularProduct): React.JSX.Element => {
  console.log("products: ", products);
  if (!products) return <div>Загрузка</div>;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag size="medium">Популярные товары</Htag>
        <div>
          <Swiper
            className={styles.list}
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation>
            {products.map((product: IBearing) => (
              <SwiperSlide key={product.url} className={styles.item}>
                <ProductItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
