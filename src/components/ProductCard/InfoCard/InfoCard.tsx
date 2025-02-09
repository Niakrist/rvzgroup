"use client";
import React, { useState } from "react";
import styles from "./InfoCard.module.css";
import { Button, Htag } from "@/ui";
import { IInfoCardProps } from "./InfoCard.props";
import { ArticleInStock } from "@/components/ArticleInStock/ArticleInStock";
import { Price } from "@/components/Price/Price";
import { Icon } from "@/components/Icon/Icon";
import { CharacteristicList } from "@/components";

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
      <Htag size="medium">{product.name}</Htag>
      <ArticleInStock product={product} />
      <Price fontSize="fs18" product={product} />
      <CharacteristicList />
      {/* <ul className={styles.characteristic}>
        {product.characteristic?.map((item) => (
          <li key={item.key} className={styles.item}>
            <span className={styles.key}>{item.key}</span>
            <span className={styles.value}>{item.value}</span>
          </li>
        ))}
      </ul> */}
      <div className={styles.buttonsGroup}>
        <div className={styles.counterQuantity}>
          <button onClick={handleDecrement}>
            <Icon name="iconMinus" className={styles.iconMinus} />
          </button>
          <input
            className={styles.input}
            type="text"
            value={quantity}
            onChange={handleChangeQuantity}
          />
          <button onClick={handleIncrement}>
            <Icon name="iconPlus" className={styles.iconPlus} />
          </button>
        </div>
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
          target="_blank"
        >
          sales@rvzgroup.ru
        </a>
      </address>
    </div>
  );
};
