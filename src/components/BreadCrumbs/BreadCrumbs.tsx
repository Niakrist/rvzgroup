"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BreadCrumbs.module.css";
import { getMetadataForCategory } from "@/utils/getMetadataForCategory";
import { urlsForCategory } from "@/constants/urlsForCategory";

type UrlsForCategoryKey = keyof typeof urlsForCategory;

export const BreadCrumbs = () => {
  const params = usePathname();
  const createBreadCrumbs = () => {
    const breadCrumbsUrl = [];

    const categories = params.split("/").filter(Boolean);
    if (params.includes("catalog")) {
      breadCrumbsUrl.push({
        path: "/",
        name: "Главная",
      });
      let currentPath = "";
      for (const item of categories) {
        currentPath += `/${item}`;
        const categoryName = getMetadataForCategory(item as UrlsForCategoryKey);
        breadCrumbsUrl.push({
          path: currentPath,
          name:
            categoryName.h1.slice(0, 1).toUpperCase() +
            categoryName.h1.slice(1),
        });
      }
    } else if (params.includes("product")) {
      breadCrumbsUrl.push({
        path: "/",
        name: "Главная",
      });
      breadCrumbsUrl.push({
        path: "/catalog",
        name: "Каталог",
      });
      breadCrumbsUrl.push({
        path: `/product/${categories[1]}`,
        name: "Пошипник",
      });
    } else {
      for (const item of categories) {
        const categoryName = getMetadataForCategory(item as UrlsForCategoryKey);
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

  const breadCrumbsUrl = createBreadCrumbs();

  return (
    <section className={styles.section}>
      <ul className={styles.container}>
        {breadCrumbsUrl.map((item, index) => (
          <li className={styles.item} key={index}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
