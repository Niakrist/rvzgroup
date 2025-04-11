import React from "react";
import Link from "next/link";
import { Icon } from "@/components";
import styles from "./Header.module.css";
import { CatalogButton } from "./CatalogButton/CatalogButton";
import { BurgerButton } from "./BurgerButton/BurgerButton";
import { ForUserInfo } from "./ForUserInfo/ForUserInfo";
import { SearchField } from "./SearchField/SearchField";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logoLink}>
        <Icon name="iconLogo" className={styles.iconLogo} />
        РВЗ
      </Link>
      <CatalogButton className={styles.buttonCatalog} />
      <div className={styles.searchField}>
        <SearchField />
      </div>
      <div className={styles.forCustomer}>
        <div className={styles.block}>
          <a className={styles.email} href="mailto:sales@rvzgroup.ru">
            sales@rvzgroup.ru
          </a>
          <span className={styles.textEmail}>почта для заявок</span>
        </div>
        <BurgerButton className={styles.burgerMenu} />

        <ForUserInfo />
      </div>
    </header>
  );
};
