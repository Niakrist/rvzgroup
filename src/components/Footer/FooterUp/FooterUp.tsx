import React from "react";
import Link from "next/link";
import { Icon, TopNavMenu } from "@/components";
import styles from "./FooterUp.module.css";
import { EMAIL_SALES, PHONE_SPB, PHONE_SPB_LINK } from "@/constants/contacts";

export const FooterUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Icon name="iconLogo" className={styles.iconLogo} />
        РВЗ
      </div>
      <TopNavMenu size="medium" vertical={true} />
      <address className={styles.address}>
        <Link className={styles.link} href={`mailto:${EMAIL_SALES}`}>
          {EMAIL_SALES}
        </Link>
        <Link className={styles.link} href={`tel:${PHONE_SPB_LINK}`}>
          {PHONE_SPB}
        </Link>
      </address>
    </div>
  );
};
