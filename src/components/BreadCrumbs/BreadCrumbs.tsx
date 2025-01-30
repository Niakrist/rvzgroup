"use client";
import { IServicesPages, servicesPages } from "@/types/servicesPages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import styles from "./BreadCrumbs.module.css";

export const BreadCrumbs: React.FC = () => {
  const params = usePathname();

  const name: IServicesPages | undefined = servicesPages.find(
    (page) => page.path === params
  );

  console.log("params: ", params);
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <Link href="/">Главная</Link>
      </li>
      <li className={styles.item}>{name?.name}</li>
    </ul>
  );
};
