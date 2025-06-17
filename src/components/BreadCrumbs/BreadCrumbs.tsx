"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { shopPages } from "@/types/servicesPages";
import styles from "./BreadCrumbs.module.css";
import { getMetadataForCategory } from "@/utils/getMetadataForCategory";

export const BreadCrumbs = () => {
  const params = usePathname();

  const createBreadCrumbs = () => {
    const breadCrumbsUrl = [];

    if (params.includes("catalog")) {
      const categories = params.split("/");
      for (const item of categories) {
        const categoryName = getMetadataForCategory(item as string);
        breadCrumbsUrl.push({
          path: item,
          name:
            categoryName.h1.slice(0, 1).toUpperCase() +
            categoryName.h1.slice(1),
        });
      }
    } else if (params.includes("product")) {
    } else {
      const categories = params.split("/");
      for (const item of categories) {
        const categoryName = getMetadataForCategory(item as string);
        breadCrumbsUrl.push({
          path: item,
          name:
            categoryName.h1.slice(0, 1).toUpperCase() +
            categoryName.h1.slice(1),
        });
      }
    }
    return breadCrumbsUrl;
  };

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

  const breadCrumbsUrl = createBreadCrumbs();

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
