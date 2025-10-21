import { ADDRESS } from "@/constants/contacts";
import React from "react";

import styles from "./FooterDown.module.css";
import Link from "next/link";

export const FooterDown: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.wrapperDown}>
      <div className={styles.container}>
        <span className={styles.copy}>@ {currentYear} Все права защищены</span>
        <div className={styles.forUsers}>
          <p className={styles.copy}>{ADDRESS}</p>
        </div>
      </div>
      <div className={styles.containerDown}>
        <Link className={styles.forUser} href="/privacy">
          Пользовательское соглашение
        </Link>
        <Link className={styles.forUser} href="/oferta">
          Договор оферты
        </Link>
      </div>
    </div>
  );
};
