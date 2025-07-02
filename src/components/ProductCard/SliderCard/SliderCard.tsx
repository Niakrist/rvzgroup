"use client";
import React, { useState } from "react";
import { ISliderCardProps } from "./SliderCard.props";
import styles from "./SliderCard.module.css";
import LabelList from "@/components/LabelList/LabelList";
import cn from "classnames";
import Image from "next/image";

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
        <Image
          width={400}
          height={400}
          className={styles.bigImg}
          src={`/images/${currentSlid}`}
          alt={`Подшипник ${product.name}`}
        />
      </div>
      <ul className={styles.smallSlider}>
        {product.images?.map((item, index) => (
          <li
            key={item}
            className={cn(styles.smallSlide, {
              [styles.active]: currentSlid === item,
            })}
            onClick={() => handleChangeSlide(item)}>
            <Image
              width={91}
              height={91}
              className={styles.smallImg}
              src={`/images/${item}`}
              alt={`Подшипник ${product.name} фото ${index}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
