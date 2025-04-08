"use client";
import { RootState } from "@/store/store";
import { Agreement, Button, InputText, Textarea } from "@/ui";
import { convertNumberInCurrency } from "@/utils/convertNumber";
import { getTotalPrice } from "@/utils/getTotalPrice";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./CartOrder.module.css";

export const CartOrder = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const { cart } = useSelector((state: RootState) => state.cart);

  const cartTotalPrice = convertNumberInCurrency(getTotalPrice(cart));

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <div className={styles.order}>
      <div className={styles.orderHeader}>
        <h3 className={styles.text}>Ваш заказ</h3>
        <p className={styles.text}>{cart.length} товара</p>
      </div>
      <div className={styles.orderTotal}>
        <p className={styles.text}>Итого:</p>
        <p className={styles.totalPrice}>{cartTotalPrice}</p>
      </div>
      <form className={styles.form} action="">
        <InputText placeholder="Имя" type="text" />
        <InputText placeholder="Телефон" type="text" />
        <InputText placeholder="Email" type="email" />
        <Textarea
          placeholder="Комментарий..."
          value={textAreaValue}
          handleChange={handleChange}
        />

        <input id="addFile" type="file" hidden />
        <label htmlFor="addFile" className={styles.addFile}>
          Прикрепить файл
        </label>

        <Button bgColor="blue" size="medium" color="whiteText">
          Оформить заказ
        </Button>
        <Agreement color="grey" id="order" />
      </form>
    </div>
  );
};
