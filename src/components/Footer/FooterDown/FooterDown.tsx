// import Link from "next/link";
import React from "react";

import styles from "./FooterDown.module.css";

export const FooterDown: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.wrapperDown}>
      <div className={styles.container}>
        <span className={styles.copy}>@ {currentYear} Все права защищены</span>
        <div className={styles.forUsers}>
          <p className={styles.copy}>
            Санкт-Петербург, Ленинградская область, территория Соржа-Старая
            производственно-складская зона, 1-й проезд, 10
          </p>
          {/* <Link className={styles.forUser} href="#">
            Пользовательское соглашение
          </Link>
          <Link className={styles.forUser} href="#">
            Договор оферты
          </Link> */}
        </div>
      </div>
    </div>
  );
};
