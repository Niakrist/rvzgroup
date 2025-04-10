"use client";
import React from "react";
import { ISliderCardProps } from "./SliderCard.props";
import styles from "./SliderCard.module.css";

export const SliderCard: React.FC<ISliderCardProps> = ({ product }) => {
  // const [currentSlid, setCurrentSlide] = useState<string>(product.images);

  // const handleChangeSlide = (slide: string) => {
  //   setCurrentSlide(slide);
  // };

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <img
          className={styles.bigImg}
          src={`http://localhost:4000/${product?.images}`}
          alt=""
        />
      </div>
      {/* <ul className={styles.smallSlider}>
        {product.images?.map((item) => (
          <li
            key={item}
            className={cn(styles.smallSlide, {
              [styles.active]: currentSlid === item,
            })}
            onClick={() => handleChangeSlide(item)}>
            <img className={styles.smallImg} src={`/${item}`} alt="" />
          </li>
        ))}
      </ul> */}
    </div>
  );
};
