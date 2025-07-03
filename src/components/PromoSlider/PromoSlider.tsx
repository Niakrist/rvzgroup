"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/ui";
import { RootState } from "@/store/store";
import { isGetPriceModal } from "@/store/openModalSlice/openModalSlice";
import styles from "./PromoSlider.module.css";
import Image from "next/image";

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
          <Image
            width={1920}
            height={700}
            className={styles.img}
            src="/slide.png"
            alt="Подшипники РВЗ - Разумный Выбор Запчастей"
          />
        </li>
      </ul>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Подшипники РВЗ</h2>
          <p className={styles.text}>Разумный Выбор Запчастей</p>
          <div className={styles.btnGroup}>
            <Button
              className={styles.buttonPromo}
              onClick={handleClick}
              size="big"
              bgColor="blue"
              color="whiteText">
              Перейти в каталог
            </Button>
            <Button
              className={styles.buttonPromo}
              onClick={handleToggleModal}
              size="big"
              bgColor="white"
              color="whiteText">
              Оставить заявку
            </Button>
          </div>
        </div>
        {/* <button className={styles.buttonArrow}>
          <Icon className={styles.arrow} name="iconArrow" />
        </button>
        <button className={styles.buttonArrowRigth}>
          <Icon className={styles.arrowRigth} name="iconArrow" />
        </button> */}
        {/* <BubbleList /> */}
      </div>
    </section>
  );
};
