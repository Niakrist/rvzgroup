"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IServicesPages, servicesPages } from "@/types/servicesPages";
import styles from "./BreadCrumbs.module.css";

export const BreadCrumbs: React.FC = () => {
  const params = usePathname();

  const name: IServicesPages | undefined = servicesPages.find(
    (page) => page.path === params
  );

  console.log("params: ", params);
  return (
    <section className={styles.section}>
      <ul className={styles.container}>
        <li className={styles.item}>
          <Link href="/">Главная</Link>
        </li>
        <li className={styles.item}>{name?.name}</li>
      </ul>
    </section>
  );
};
