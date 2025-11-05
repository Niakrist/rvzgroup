"use client";
import React from "react";
import { CharacteristicList } from "@/components";
import styles from "./ProductCharacteristic.module.css";
import { IBearing } from "@/types/bearing";
import Link from "next/link";
import { Htag, WrapperSection } from "@/ui";

interface IProductCharacteristicProps {
  bearingItem: IBearing;
}

export const ProductCharacteristic = ({
  bearingItem,
}: IProductCharacteristicProps): React.JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <WrapperSection bgSection="white" className={styles.wrapperNav}>
        <ul className={styles.nav}>
          <li className={styles.link}>
            <Link href={"#characteristic"}>Характеристики</Link>
          </li>
          <li className={styles.link}>
            <Link href={"#content"}>Описание</Link>
          </li>
          <li className={styles.link}>
            <Link href={"#delivery"}>Доставка и оплата</Link>
          </li>
          <li className={styles.link}>
            <Link href={"#guarantee"}>Гарантия качества</Link>
          </li>
        </ul>
      </WrapperSection>

      <WrapperSection bgSection="white" className={styles.wrapperSection}>
        <Htag className={styles.title} id="characteristic" size="medium" tag="h2">
          Технические характеристики
        </Htag>
        <CharacteristicList type="characteristic" bearingItem={bearingItem} showAll={true} />
      </WrapperSection>
      <WrapperSection bgSection="white" className={styles.wrapperSection}>
        <Htag className={styles.title} id="content" size="medium" tag="h2">
          Описание
        </Htag>
        <CharacteristicList type="content" bearingItem={bearingItem} />
      </WrapperSection>
      <WrapperSection bgSection="white" className={styles.wrapperSection}>
        <Htag className={styles.title} id="delivery" size="medium" tag="h2">
          Доставка и оплата
        </Htag>
        <CharacteristicList type="delivery" bearingItem={bearingItem} />
      </WrapperSection>
      <WrapperSection bgSection="white" className={styles.wrapperSection}>
        <Htag className={styles.title} id="guarantee" size="medium" tag="h2">
          Гарантия качества
        </Htag>
        <CharacteristicList type="guarantee" bearingItem={bearingItem} />
      </WrapperSection>
    </div>
  );
};
