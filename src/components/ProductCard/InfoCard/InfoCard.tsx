"use client";
import React, { useState } from "react";
import {
  ArticleInStock,
  Price,
  CharacteristicList,
  CounterQuantity,
} from "@/components";
import { Button, Htag } from "@/ui";
import { IInfoCardProps } from "./InfoCard.props";
import styles from "./InfoCard.module.css";

export const InfoCard: React.FC<IInfoCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d+$/.test(value)) {
      const parsedValue = parseInt(value, 10);
      setQuantity(parsedValue);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className={styles.content}>
      <Htag size="medium">Пошипник {product.name}</Htag>
      <ArticleInStock product={product} />
      <Price fontSize="fs18" product={product} />
      <CharacteristicList />
      <div className={styles.buttonsGroup}>
        <CounterQuantity
          quantity={quantity}
          handleChangeQuantity={handleChangeQuantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        <Button className={styles.buttonBlue} color="blue">
          В корзину
        </Button>
        <Button className={styles.buttonBorder} color="border">
          Получить КП в 1 клик
        </Button>
      </div>
      <address className={styles.email}>
        Отправить заявку на почту{" "}
        <a
          className={styles.link}
          href="mailto:sales@rvzgroup.ru"
          target="_blank">
          sales@rvzgroup.ru
        </a>
      </address>
    </div>
  );
};
