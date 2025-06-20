"use client";
import { Icon } from "@/components/Icon/Icon";
import { initialCart } from "@/store/cartSlice/cartSlice";
import { RootState } from "@/store/store";
import { loadCartFromLocalStorage } from "@/utils/localstorage";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ForUserInfo.module.css";

export const ForUserInfo = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const loadCart = loadCartFromLocalStorage();
    dispatch(initialCart(loadCart));
  }, []);

  return (
    <>
      {/* <Link href="/bookmark" className={styles.block}>
        <Icon name="iconBookmark" className={styles.iconBookmark} />
        <span className={styles.text}>просмотреное</span>
        <span className={styles.quantityBookmark}>10</span>
      </Link> */}
      <Link href="/cart" className={styles.block}>
        <Icon name="iconCart" className={styles.iconCart} />
        <span className={styles.text}>корзина</span>
        {!!cart.length && (
          <span className={styles.quantityCart}>{cart.length}</span>
        )}
      </Link>
    </>
  );
};
