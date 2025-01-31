import Link from "next/link";
import React from "react";

import styles from "./FooterDown.module.css";

const FooterDown: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.wrapperDown}>
      <div className={styles.container}>
        <span className={styles.copy}>@ {currentYear} Все права защищены</span>
        <div className={styles.forUsers}>
          <Link className={styles.forUser} href="#">
            Пользовательское соглашение
          </Link>
          <Link className={styles.forUser} href="#">
            Договор оферты
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterDown;
