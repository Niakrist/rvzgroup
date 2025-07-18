import React from "react";
import { TopNavMenu } from "@/components";
import styles from "./TopNav.module.css";
import { PHONE_SPB, PHONE_SPB_LINK } from "@/constants/contacts";

export const TopNav = () => {
  return (
    <section className={styles.topNav}>
      <div className={styles.container}>
        <TopNavMenu size="big" />
        <a className={styles.link} href={`tel:${PHONE_SPB_LINK}`}>
          {PHONE_SPB}
        </a>
      </div>
    </section>
  );
};
