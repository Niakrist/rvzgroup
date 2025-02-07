"use client";
import { isGetPriceModal } from "@/store/openModalSlice/openModalSlice";
import { RootState } from "@/store/store";
import { BubbleList, Button } from "@/ui";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Icon } from "../Icon/Icon";
import styles from "./PromoSlider.module.css";
import { useRouter } from "next/navigation";

export const PromoSlider = () => {
  const dispatch = useDispatch();
  const { getPriceModal } = useSelector((state: RootState) => state.openModal);
  const router = useRouter();

  const handleToggleModal = () => {
    dispatch(isGetPriceModal(!getPriceModal));
  };

  const handleClick = () => {
    router.push("/catalog");
  };

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
            <Button onClick={handleClick} color="blue">
              Перейти в каталог
            </Button>
            <Button onClick={handleToggleModal} color="white">
              Оставить заявку
            </Button>
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
