"use client";
import { Agreement, Button, InputText, Textarea } from "@/ui";
import React, { useState } from "react";

import styles from "./CartOrder.module.css";

export const CartOrder = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <div className={styles.order}>
      <div className={styles.orderHeader}>
        <h3 className={styles.text}>Ваш заказ</h3>
        <p className={styles.text}>33 товара</p>
      </div>
      <div className={styles.orderTotal}>
        <p className={styles.text}>Итого:</p>
        <p className={styles.totalPrice}>1 365 000 ₽</p>
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

        <Button color="blue">Оформить заказ</Button>
        <Agreement color="grey" id="order" />
      </form>
    </div>
  );
};
