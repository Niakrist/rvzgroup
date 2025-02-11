"use client";
import React, { useState } from "react";
import cn from "classnames";
import { Icon } from "@/components";

import styles from "./Header.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleMenuModal } from "@/store/openModalSlice/openModalSlice";

export const Header = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { isMenuModal } = useSelector((state: RootState) => state.openModal);

  const handleOpen = () => {
    setIsMenu((prev) => !prev);
  };

  const handleClose = () => {
    dispatch(toggleMenuModal(true));
  };

  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logoLink}>
        <Icon name="iconLogo" className={styles.iconLogo} />
        РВЗ
      </Link>
      <button onClick={handleClose} className={styles.buttonCatalog}>
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
        <button onClick={handleOpen} className={styles.burgerMenu}>
          <span
            className={cn(styles.burgerLine, {
              [styles.burgerLineOpen]: isMenu,
            })}
          />
        </button>
        <Link href="/bookmark" className={styles.block}>
          <Icon name="iconBookmark" className={styles.iconBookmark} />
          <span className={styles.text}>просмотреное</span>
          <span className={styles.quantityBookmark}>10</span>
        </Link>
        <Link href="/cart" className={styles.block}>
          <Icon name="iconCart" className={styles.iconCart} />
          <span className={styles.text}>корзина</span>
          <span className={styles.quantityCart}>10</span>
        </Link>
      </div>
    </header>
  );
};
