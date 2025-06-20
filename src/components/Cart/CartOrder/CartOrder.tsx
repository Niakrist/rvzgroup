"use client";
import { OrderForm } from "@/components";
import { RootState } from "@/store/store";
import { Text } from "@/ui";
import { convertNumberInCurrency } from "@/utils/convertNumber";
import { getTotalPrice } from "@/utils/getTotalPrice";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./CartOrder.module.css";

export const CartOrder = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  const cartTotalPrice = convertNumberInCurrency(getTotalPrice(cart));

  const inStock = cart.filter(
    (item) => item.product.price || item.product.priceRvz
  ).length;
  const inCart = cart.length;

  return (
    <div className={styles.order}>
      <div className={styles.orderHeader}>
        <h3 className={styles.text}>Ваш заказ</h3>
        <p className={styles.text}>{inCart} товара</p>
      </div>
      <div className={styles.orderTotal}>
        {inStock === inCart ? (
          <div className={styles.orderinStock}>
            <p className={styles.text}>Итого:</p>
            <p className={styles.totalPrice}>{cartTotalPrice}</p>
          </div>
        ) : (
          <>
            <div className={styles.orderinStock}>
              <p className={styles.text}>Итого:</p>
              <p className={styles.totalPrice}>{cartTotalPrice}</p>
            </div>
            <div className={styles.forStock}>
              <p className={styles.text}>{inCart - inStock} товара</p>
              <p className={styles.totalPrice}>Под заказ</p>
            </div>
          </>
        )}
        <Text tag="p" size="small" className={styles.feedBackText}>
          После получения заявки с вами свяжется менеджер для обсуждения деталей
        </Text>
      </div>
      <OrderForm order={cart} />
      {/* <form className={styles.form} action="">
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

        <Button
          bgColor="blue"
          size="medium"
          color="whiteText"
          disabled={!isCheck}>
          Оформить заказ
        </Button>
        <Agreement
          isCheck={isCheck}
          handleChange={handleChangeAgreement}
          color="grey"
          id="order"
        />
      </form> */}
    </div>
  );
};
