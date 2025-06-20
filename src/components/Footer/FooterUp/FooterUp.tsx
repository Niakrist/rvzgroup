import React from "react";
import Link from "next/link";
import { Icon, TopNavMenu } from "@/components";
import styles from "./FooterUp.module.css";

export const FooterUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Icon name="iconLogo" className={styles.iconLogo} />
        РВЗ
      </div>
      <TopNavMenu size="medium" vertical={true} />
      <address className={styles.address}>
        <Link className={styles.link} href="mailto:sales@rvzgroup.ru">
          sales@rvzgroup.ru
        </Link>
        <Link className={styles.link} href="tel:78126428527">
          +7 812 642-85-27
        </Link>
      </address>
    </div>
  );
};
