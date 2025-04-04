"use client";
import React from "react";
import Link from "next/link";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { Icon } from "@/components";
import {
  toggleMenuBurger,
  toggleMenuModal,
} from "@/store/openModalSlice/openModalSlice";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const Header = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

  // Открывает закрывает бургер мобильное меню
  const handletoggleBurger = () => {
    // setIsMenu((prev) => !prev);
    dispatch(toggleMenuBurger(true));
  };

  // Открывает закрывает каталог на desctop
  const handleToggleCatalog = () => {
    dispatch(toggleMenuModal(true));
  };

  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logoLink}>
        <Icon name="iconLogo" className={styles.iconLogo} />
        РВЗ
      </Link>
      <button onClick={handleToggleCatalog} className={styles.buttonCatalog}>
        <span className={styles.openClose} />
        Каталог
      </button>
      {/* <Link href={"/catalog"} className={styles.buttonCatalog}>
        <span className={styles.openClose} />
        Каталог
      </Link> */}
      <form className={styles.form}>
        <input
          className={styles.search}
          type="text"
          placeholder="Поиск по товарам"
        />
        <button>
          <Icon name="iconSearch" className={styles.iconSearch} />
        </button>
      </form>
      <div className={styles.forCustomer}>
        <div className={styles.block}>
          <a className={styles.email} href="mailto:sales@rvzgroup.ru">
            sales@rvzgroup.ru
          </a>
          <span className={styles.textEmail}>почта для заявок</span>
        </div>
        <button onClick={handletoggleBurger} className={styles.burgerMenu}>
          <span className={cn(styles.burgerLine)} />
        </button>
        <Link href="/bookmark" className={styles.block}>
          <Icon name="iconBookmark" className={styles.iconBookmark} />
          <span className={styles.text}>просмотреное</span>
          <span className={styles.quantityBookmark}>10</span>
        </Link>
        <Link href="/cart" className={styles.block}>
          <Icon name="iconCart" className={styles.iconCart} />
          <span className={styles.text}>корзина</span>
          {!!cart.length && (
            <span className={styles.quantityCart}>{cart.length}</span>
          )}
        </Link>
      </div>
    </header>
  );
};
