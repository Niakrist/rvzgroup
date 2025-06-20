"use client";
import React, { useState } from "react";
import { ISliderCardProps } from "./SliderCard.props";
import styles from "./SliderCard.module.css";
import LabelList from "@/components/LabelList/LabelList";
import cn from "classnames";

export const SliderCard: React.FC<ISliderCardProps> = ({ product }) => {
  const handleChangeSlide = (slide: string) => {
    setCurrentSlide(slide);
  };

  const [currentSlid, setCurrentSlide] = useState<string>(product.images[0]);

  return (
    <div className={styles.slider}>
      <LabelList
        size={"big"}
        popular={product.popular}
        stock={product.stock}
        newProduct={product.new_product}
      />
      <div className={styles.slide}>
        <img
          className={styles.bigImg}
          src={`/images/${currentSlid}`}
          alt="Слайд"
        />
      </div>
      <ul className={styles.smallSlider}>
        {product.images?.map((item) => (
          <li
            key={item}
            className={cn(styles.smallSlide, {
              [styles.active]: currentSlid === item,
            })}
            onClick={() => handleChangeSlide(item)}>
            <img className={styles.smallImg} src={`/images/${item}`} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
