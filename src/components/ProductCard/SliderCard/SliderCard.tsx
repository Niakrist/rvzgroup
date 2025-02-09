"use client";
import React, { useState } from "react";
import styles from "./SliderCard.module.css";
import cn from "classnames";
import { ISliderCardProps } from "./SliderCard.props";

export const SliderCard: React.FC<ISliderCardProps> = ({ product }) => {
  const [currentSlid, setCurrentSlide] = useState<string>(product.img);

  const handleChangeSlide = (slide: string) => {
    setCurrentSlide(slide);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <img className={styles.bigImg} src={`/${currentSlid}`} alt="" />
      </div>
      <ul className={styles.smallSlider}>
        {product.images?.map((item) => (
          <li
            key={item}
            className={cn(styles.smallSlide, {
              [styles.active]: currentSlid === item,
            })}
            onClick={() => handleChangeSlide(item)}
          >
            <img className={styles.smallImg} src={`/${item}`} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
