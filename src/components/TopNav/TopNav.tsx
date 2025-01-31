import React from "react";
import { TopNavMenu } from "@/components";
import styles from "./TopNav.module.css";

export const TopNav = () => {
  return (
    <section className={styles.topNav}>
      <div className={styles.container}>
        <TopNavMenu size="big" />
        <a className={styles.link} href="tel:78126428527">
          +7 812 642-85-27
        </a>
      </div>
    </section>
  );
};
