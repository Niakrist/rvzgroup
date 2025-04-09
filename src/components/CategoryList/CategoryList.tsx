"use client";
import React from "react";
import { categoryList } from "@/mockdata/mockdata";
import { CategoryItem } from "@/components";
import { ICategory } from "@/types/types";
import styles from "./CategoryList.module.css";

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export const CategoryList = (): React.JSX.Element => {
  return (
    <div className={styles.listCategory}>
      <Swiper
        modules={[Navigation, A11y]}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          544: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          660: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          834: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
          922: {
            slidesPerView: 3.1,
            spaceBetween: 20,
          },
          1023: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1123: {
            slidesPerView: 3.8,
            spaceBetween: 20,
          },
          1239: {
            slidesPerView: 4.2,
            spaceBetween: 20,
          },
        }}
        navigation>
        {categoryList.map((category: ICategory) => (
          <SwiperSlide className={styles.item} key={category.path}>
            <CategoryItem category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
