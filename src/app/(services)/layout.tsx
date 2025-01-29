import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import React from "react";
import styles from "./ServicesLayout.module.css";

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className={styles.section}>
      <BreadCrumbs />
      <div className={styles.container}>{children}</div>
    </section>
  );
}
