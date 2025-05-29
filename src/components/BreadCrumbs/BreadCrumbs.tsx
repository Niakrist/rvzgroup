"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { shopPages } from "@/types/servicesPages";
import styles from "./BreadCrumbs.module.css";

export const BreadCrumbs = () => {
  const params = usePathname();

  const urls = params.split("/");

  const createBreadCrumbsUrl = () => {
    const breadCrumbsUrl = [];
    if (!urls.includes("product")) {
      for (const item of shopPages) {
        if (urls.includes(item.path)) {
          breadCrumbsUrl.push(item);
        }
      }
    } else if (urls.includes("product")) {
      const url = urls.at(-1) as string;
    }

    return breadCrumbsUrl;
  };

  const breadCrumbsUrl = createBreadCrumbsUrl();

  return (
    <section className={styles.section}>
      <ul className={styles.container}>
        {breadCrumbsUrl.map((item) => (
          <li className={styles.item} key={item.name}>
            <Link href={`/${item.path}`}>{item.name}</Link>
          </li>
        ))}
        {/* <li className={styles.item}>
          <Link href="/">Главная</Link>
        </li>
        <li className={styles.item}>{name?.name}</li> */}
      </ul>
    </section>
  );
};
