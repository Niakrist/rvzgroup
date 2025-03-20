"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Icon } from "@/components";
import { RootState } from "@/store/store";
import { toggleMenuBurger } from "@/store/openModalSlice/openModalSlice";
import { menuCatalogList } from "@/mockdata/catalogMenu";
import styles from "./MenuBurger.module.css";

export const MenuBurger = () => {
  const [isOpenMobileCatalog, setIsOpenMobileCatalog] =
    useState<boolean>(false);
  const params = usePathname();

  const dispatch = useDispatch();
  const { isMenuBurger } = useSelector((state: RootState) => state.openModal);

  const handleCloseModal = () => {
    dispatch(toggleMenuBurger(false));
    setIsOpenMobileCatalog(false);
  };

  useEffect(() => {
    dispatch(toggleMenuBurger(false));
    setIsOpenMobileCatalog(false);
  }, [params]);

  if (!isMenuBurger) {
    return null;
  }

  const toggleMobileCatalog = () => {
    setIsOpenMobileCatalog(!isOpenMobileCatalog);
  };

  return (
    <Modal width="mobileMenu">
      <button onClick={handleCloseModal} className={styles.close} />
      {/* <div className={styles.wrapper}> */}
      {isOpenMobileCatalog ? (
        <>
          <button onClick={toggleMobileCatalog} className={styles.back}>
            <Icon className={styles.iconArrowDown} name="iconArrowDown" /> Назад
          </button>
          <nav className={styles.nav}>
            <ul className={styles.listCatalog}>
              {menuCatalogList.map((item) => (
                <li key={item.url}>
                  <Link
                    className={styles.linkCatalog}
                    href={`/catalog/${item.url}`}>
                    <img
                      className={styles.images}
                      src={`./icons/${item.img}`}
                      alt=""
                    />{" "}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : (
        <>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/">
                  Главная
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleMobileCatalog}
                  className={styles.catalog}>
                  Каталог{" "}
                  <Icon className={styles.iconArrowDown} name="iconArrowDown" />{" "}
                </button>
              </li>
              <li>
                <Link className={styles.link} href="/about">
                  О компании
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/brand-rvz">
                  Бренд РВЗ
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="delivery">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/vacancy">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/contacts">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>

          <address className={styles.address}>
            <a href="mailto:sales@rvzgroup.ru">sales@rvzgroup.ru</a>
            <a href="tel:78126428527">+7 812 642-85-27</a>
            <p>Санкт-Петербург, улица Ржевская, д. 4</p>
          </address>
        </>
      )}
      {/* </div> */}
    </Modal>
  );
};
