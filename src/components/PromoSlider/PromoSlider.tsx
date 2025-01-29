import { BubbleList, Button } from "@/ui";
import Image from "next/image";
import React from "react";
import { Icon } from "../Icon/Icon";
import styles from "./PromoSlider.module.css";

export const PromoSlider = () => {
  return (
    <section className={styles.promoSlider}>
      <ul className={styles.slider}>
        <li className={styles.item}>
          <img className={styles.img} src="./slide.png" alt="" />
        </li>
      </ul>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Подшипники для спецтехники</h2>
          <p className={styles.text}>
            Большой выбор товара Доставим за 7–14 дней
          </p>
          <div className={styles.btnGroup}>
            <Button color="blue">Перейти в каталог</Button>
            <Button color="white">Оставить заявку</Button>
          </div>
        </div>
        <button className={styles.buttonArrow}>
          <Icon className={styles.arrow} name="iconArrow" />
        </button>
        <button className={styles.buttonArrowRigth}>
          <Icon className={styles.arrowRigth} name="iconArrow" />
        </button>
        <BubbleList />
      </div>
    </section>
  );
};
